import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({whitelist: true}),new ValidationPipe({transformOptions: {
    enableImplicitConversion: true}}))
  app.use(cookieParser())
  const config =  new DocumentBuilder().setTitle('Swagger Test').setDescription('Swagger api test Desc').setVersion('1.0.0').build()

  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('deneme',app,document)
  await app.listen(3000);
}
bootstrap();
