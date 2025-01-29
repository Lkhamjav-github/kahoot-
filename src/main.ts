import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClientService } from './prisma-client/prisma-client.service';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const PrismaClient = app.get(PrismaClientService);
  PrismaClient.enableShutdownHooks(app);
  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();
