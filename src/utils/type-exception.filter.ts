import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch(TypeError)
export class TypeExceptionFilter implements ExceptionFilter {
  catch(exception: TypeError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    response.status(400).json({
      message: exception.message,
      statusCode: 400,
    });
  }
}
