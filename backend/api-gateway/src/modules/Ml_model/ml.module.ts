import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MlService } from './ml.service';

@Module({
  // imports: [
  //   ClientsModule.register([
  //     {
  //       name: 'KAFKA_ML',
  //       transport: Transport.KAFKA,
  //       options: {
  //         client: {
  //           clientId: 'ml-consumer-client',
  //           brokers: ['localhost:9092'],
  //         },
  //         consumer: {
  //           groupId: 'ml-consumer-group', // MUST BE UNIQUE
  //           allowAutoTopicCreation: true,
  //         },
  //         subscribe: {
  //           topics: ['input.voltage'], // MUST MATCH TOPIC EXACTLY
  //           fromBeginning: true,
  //         },
  //       },
  //     },
  //   ]),
  // ],
  providers: [MlService],
  exports: [MlService],
})
export class MlModule {}
