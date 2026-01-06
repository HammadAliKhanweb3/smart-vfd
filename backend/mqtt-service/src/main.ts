import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";


async function bootstrap() {

const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,
     {
       transport: Transport.MQTT,
       options: {
         url: process.env.MQTT_URL || 'mqtt://mosquitto:1883',
       }
     }
   );

   await app.listen()
   Logger.log("✅ MQTT microservice connected ")
  
  }

   bootstrap()