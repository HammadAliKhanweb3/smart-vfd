import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { Ctx, EventPattern, KafkaContext, Payload } from '@nestjs/microservices';
import { pubSub } from './pubSub';
import { SensorData } from './sensor-data.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //  // return this.appService.getHello();
  // } // @Get()
  // getHello(): string {
  //  // return this.appService.getHello();
  // }

  @EventPattern('input.voltage')
  readVoltage(@Payload() message: any, @Ctx() context: KafkaContext) {
    const sensorData = context.getMessage();

    pubSub.publish('inputVoltage',{inputVoltage:sensorData.value})
    Logger.log("Recieved at kafka broker",sensorData.value)
    
  }
  
}

