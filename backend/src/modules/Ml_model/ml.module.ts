import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ML_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'ml',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'ml-consumer'
          }
        }
      },
    ]),
  ]
})
export class MlModule{}
