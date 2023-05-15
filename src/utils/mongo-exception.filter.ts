import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { MongoError } from 'mongodb';

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();

    if (exception.code === 11000)
      response
        .status(409)
        .json({ message: 'urlName already exists.', statusCode: 409 });
    else
      response.status(500).json({ message: 'Server error.', statusCode: 500 });
  }
}
