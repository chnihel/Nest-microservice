import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 3002,host: '127.0.0.1'
    },
  });
  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
