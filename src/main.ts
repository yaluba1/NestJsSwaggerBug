import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Adding Swagger
  const openapi_config = new DocumentBuilder()
    .setTitle('Bug report')
    .setDescription('Bug reproduction')
    .setVersion('1.0')
    .addTag('sample')
    .build();
  const document = SwaggerModule.createDocument(app, openapi_config);
  SwaggerModule.setup('api', app, document);  // Path is /api
  await app.listen(3000);
}
bootstrap();
