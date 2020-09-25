import { ArgumentsHost, Catch, ConflictException, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { MongoError } from 'mongodb';
import { Response, Request } from 'express';

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    // const status = exception.getStatus();
    console.log('Exception', exception);

    response
      .status(HttpStatus.NOT_ACCEPTABLE)
      .json({
        statusCode: HttpStatus.NOT_ACCEPTABLE,
        timestamp: new Date().toISOString(),
        error: [`DB error.`],
      });
  }
}