import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { MlService } from "./ml.service";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_ML',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'ml',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'ml-consumer-group',
            allowAutoTopicCreation:true
          }
        }
      },
    ]), 
  ],
  providers:[MlService],
  exports:[MlService],
})
export class MlModule{}
