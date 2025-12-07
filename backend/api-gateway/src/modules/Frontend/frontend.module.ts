import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'FRONTEND_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'frontend',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'frontend-consumer'
          }
        }
      },
    ]),
  ]
})
export class FrontendModule{}
