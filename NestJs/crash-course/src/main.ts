import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // strips properties that are not in the DTO
    forbidNonWhitelisted: true, // throws an error if non-whitelisted properties are found
    transform: true, // automatically transforms payloads to DTO instances
  }));
  await app.listen(process.env.PORT ?? 3000,()=>{
    console.log("nest app is running on port at http://localhost:3000");
  });
}
bootstrap();
