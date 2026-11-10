#!/usr/bin/env bash
# Regenerate twice in a disposable checkout; never push, publish, or edit this tree.
set -euo pipefail
: "${SPEAKEASY_API_KEY:?SPEAKEASY_API_KEY is required for regeneration verification}"
: "${OPENAPI_SCHEMA:?Set OPENAPI_SCHEMA to the corrected upstream OpenAPI document}"
SPEAKEASY_BIN=${SPEAKEASY_BIN:-speakeasy}
SPEAKEASY_BIN=$(command -v "$SPEAKEASY_BIN")
root=$(git rev-parse --show-toplevel)
work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT
# Archive the exact committed PR head, including protected hand-maintained files.
git -C "$root" archive HEAD | tar -x -C "$work"
if [[ "$OPENAPI_SCHEMA" == https://* ]]; then
  curl --fail --location --retry 3 "$OPENAPI_SCHEMA" -o "$work/input.yaml"
else
  cp "$OPENAPI_SCHEMA" "$work/input.yaml"
fi
cd "$work"
# Persistent edits require git plus read access to the previous generator
# snapshot refs. Use the public repository for fetch and explicitly disable push.
git init -q
git remote add origin https://github.com/frain-dev/convoy.js.git
git remote set-url --push origin no-push://disabled
git config user.name "SDK verification"
git config user.email "sdk-verification@localhost"
git add .
git commit -qm "Regeneration verification baseline"
protected=(src/sdk/delivery-attempts.ts src/funcs/delivery-attempts-get-delivery-attempts.ts src/models/operations/get-delivery-attempts.ts tests/delivery-attempts-compatibility.test.ts)
sha256sum "${protected[@]}" > protected.sha256
for pass in 1 2; do
  echo "Regeneration verification pass $pass"
  # git archive preserves commit times, which can be in the future. Reset the
  # old lock's timestamp without changing its contents before freshness checks.
  touch -d @0 .speakeasy/gen.lock
  touch generation-start
  if ! "$SPEAKEASY_BIN" generate sdk --lang typescript --schema "$work/input.yaml" \
    --out "$work" --repo https://github.com/frain-dev/convoy.js --auto-yes; then
    # Package metadata is public source, useful for diagnosing persistent edits.
    if git diff --name-only --diff-filter=U | grep -Fxq package.json; then
      cat package.json
    fi
    exit 1
  fi
  # This pinned CLI can return zero after an authentication timeout. Require
  # a freshly written generation lock, not only a successful process exit.
  if [[ ! .speakeasy/gen.lock -nt generation-start ]]; then
    echo "Generator did not write a fresh generation lock; refusing a false pass." >&2
    exit 1
  fi
  sha256sum --check protected.sha256
  # Do not expose the generator credential to dependency scripts or test code.
  env -u SPEAKEASY_API_KEY npm ci
  env -u SPEAKEASY_API_KEY npm test
  env -u SPEAKEASY_API_KEY ./node_modules/.bin/jest --config jestconfig.json --runInBand --testPathPattern=delivery-attempts-compatibility
  env -u SPEAKEASY_API_KEY npm run build
  env -u SPEAKEASY_API_KEY npm run lint
done
