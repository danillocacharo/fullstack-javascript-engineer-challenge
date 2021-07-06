import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { WinstonModule } from 'nest-winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      
    }),
    cors: true
  });

  const docConfig = new DocumentBuilder()
    .setTitle('Api Maxxidata')
    .setDescription('REST API Doc')
    .setVersion('1.0')
    .build();
  const doc = SwaggerModule.createDocument(app, docConfig);
  SwaggerModule.setup('api', app, doc);

  await app.listen(3000);
}
bootstrap();
