// Update your mqtt.module.ts with this code
import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import * as mqtt from 'mqtt';
import { AppController } from "./app.controller";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "KAFKA_PRODUCER",
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: "mqtt",
            brokers: ['kafka:9092']
          },
          producer: {
            allowAutoTopicCreation: true
          },
        }
            }
    ])
  ],
  controllers:[AppController]
})
export class AppModule {}