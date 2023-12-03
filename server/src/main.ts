import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
  });

  const config = new DocumentBuilder()
    .setTitle('Parties')
    .setDescription('The parties API description')
    .setVersion('1.0')
    .addTag('parties')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(9876, () => console.log('server started on port: 9876'));
}
bootstrap();
