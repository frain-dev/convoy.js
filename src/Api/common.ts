export interface Pageable {
    perPage?: number;
    next_page_cursor?: string;
    prev_page_cursor?: string;
    direction?: 'next' | 'prev';
}
