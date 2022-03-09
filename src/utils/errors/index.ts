import * as httpStatus from 'http-status';

class BaseError extends Error {
  public statusCode: number;

  constructor(message?: string, status?: number) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message as string;
    this.statusCode = status as number;
  }
}

class BadRequestException extends BaseError {
  constructor(message?: string, statusCode?: number) {
    message = message || (httpStatus[httpStatus.BAD_REQUEST] as string);

    super(message, statusCode);
  }
}

class UnauthorizedException extends BaseError {
  constructor(message?: string, statusCode?: number) {
    message = message || (httpStatus[httpStatus.UNAUTHORIZED] as string);

    super(message, statusCode);
  }
}

class ForbiddenException extends BaseError {
  constructor(message?: string, statusCode?: number) {
    message = message || (httpStatus[httpStatus.FORBIDDEN] as string);

    super(message, statusCode);
  }
}

class NotFoundException extends BaseError {
  constructor(message?: string, statusCode?: number) {
    message = message || (httpStatus[httpStatus.NOT_FOUND] as string);

    super(message, statusCode);
  }
}

class TooManyRequestException extends BaseError {
  constructor(message?: string, statusCode?: number) {
    message = message || (httpStatus[httpStatus.TOO_MANY_REQUESTS] as string);

    super(message, statusCode);
  }
}

class ServerException extends BaseError {
  constructor(message?: string, statusCode?: number) {
    message = message || (httpStatus[httpStatus.INTERNAL_SERVER_ERROR] as string);

    super(message, statusCode);
  }
}

export {
  BadRequestException,
  UnauthorizedException,
  ForbiddenException,
  NotFoundException,
  TooManyRequestException,
  ServerException,
};
