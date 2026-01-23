import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   await app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId:"api-gateway",
          brokers: [process.env.KAFKA_BROKER || 'kafka:9092'],
        },
        consumer: { groupId: 'api-gateway-consumer' },  
      },
    },
  );

  await app.startAllMicroservices()
  //  app.enableCors({
  //   origin: 'http://example.com', // Allow specific domain
  //   methods: 'GET,POST,PUT,DELETE', // Allow HTTP methods
  //   credentials: true, // Allow cookies to be sent
  //   allowedHeaders: 'Content-Type, Authorization', // Permitted request headers
  // })
  app.enableCors()
  await app.listen(process.env.PORT ?? 3000);

  console.log('HTTP server + Kafka ML Consumer running...');
}

bootstrap();

 