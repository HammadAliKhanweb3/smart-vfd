import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const mqttMicroservice = app.connectMicroservice<MicroserviceOptions>(
  //   {
  //     transport: Transport.MQTT,
  //     options: {
  //       url: "mqtt://localhost:1883"
  //     }
  //   }
  // );

  // // Add MQTT client event listeners for debugging
  // const mqttClient = (mqttMicroservice as any).client;
  // if (mqttClient) {
  //   mqttClient.on('connect', () => {
  //     console.log('✅ MQTT Client connected to broker');
  //   });
    
  //   mqttClient.on('error', (error) => {
  //     console.error('❌ MQTT Client error:', error);
  //   });
    
  //   mqttClient.on('message', (topic, message) => {
  //     console.log(`📨 Received MQTT message on ${topic}:`, message.toString());
  //   });
  // }
   const kafkaMicroservice = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: { clientId:"sensors",brokers: ['localhost:9092'] },
    },
  });

  await app.startAllMicroservices()
  await app.listen(process.env.PORT ?? 3000);
  console.log('HTTP server running on port 3000');
 // console.log('MQTT microservice running');
}
bootstrap().catch((error)=>{
  console.error("❌ Error Starting application:",error);
  process.exit(1)
  
})
