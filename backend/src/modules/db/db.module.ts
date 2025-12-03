import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'DB_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'db',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'db-consumer'
          }
        }
      },
    ]),
  ]
})
export class DbModule{}
