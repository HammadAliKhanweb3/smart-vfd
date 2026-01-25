import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
    app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId:"db",
          brokers: [process.env.KAFKA_BROKER || 'kafka:9092']
        },
        consumer: { groupId: 'db-consumer' },  
      },
    },
  );
  await app.startAllMicroservices()
  Logger.log("DB Service Microservice is listening to Kafka messages...")
  await app.listen(4000);
  Logger.log('DB Service + Kafka Consumer running ✅');
}
bootstrap();