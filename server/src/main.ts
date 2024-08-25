import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import admin from 'firebase-admin';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PATCH', 'DELETE'],
    origin: ['http://localhost:5000', 'https://bus.hkound.pe.kr'],
  });
  await app.listen(parseInt(process.env.PORT));
}
bootstrap();
