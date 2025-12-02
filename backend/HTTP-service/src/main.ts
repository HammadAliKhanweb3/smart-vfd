import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(
    {
      transport:Transport.MQTT,
      options:{
        url:"mqtt://localhost:1883"
      }
    }
  )

  await app.startAllMicroservices()
  await app.listen(process.env.PORT ?? 3000);
  console.log('HTTP server running on port 3000');
  console.log('MQTT microservice running');
}
bootstrap().catch((error)=>{
  console.log(error);
  
})
