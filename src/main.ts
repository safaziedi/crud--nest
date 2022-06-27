import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors :true});
  app.useGlobalPipes(new ValidationPipe())


  const config = new DocumentBuilder()
  .setTitle('Todo List API ')
  .setDescription('back & front : reactjs&nestjs')
  .setVersion ('1.0')
  .build();
  const document = SwaggerModule.createDocument (app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(8000);
}
bootstrap();
