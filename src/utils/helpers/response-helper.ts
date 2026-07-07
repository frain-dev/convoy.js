import * as status from 'http-status';
import {
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServerException,
    TooManyRequestException,
    UnauthorizedException,
} from '../errors';

export class ResponseHelper {
    static handleErrors(error: any) {
        const statusCode = error.response?.status;

        switch (statusCode) {
            case status.BAD_REQUEST:
                throw new BadRequestException(error.response?.data?.message, statusCode);
            case status.UNAUTHORIZED:
                throw new UnauthorizedException(error?.response?.data?.message, statusCode);
            case status.FORBIDDEN:
                throw new ForbiddenException(error?.response?.data?.message, statusCode);
            case status.NOT_FOUND:
                throw new NotFoundException(error?.response?.data?.message, statusCode);
            case status.TOO_MANY_REQUESTS:
                throw new TooManyRequestException(error?.response?.data?.message, statusCode);
            default:
                // No HTTP response means a transport failure (DNS, refused
                // connection, timeout); rethrow it instead of mislabelling
                // it as an internal server error. Strip the axios request
                // config and raw request first: they carry the Authorization
                // header, which must not leak into downstream exception logs.
                if (!error?.response) {
                    if (error && typeof error === 'object') {
                        delete error.config;
                        delete error.request;
                    }
                    throw error;
                }
                throw new ServerException(error?.response?.data?.message, statusCode);
        }
    }
}
