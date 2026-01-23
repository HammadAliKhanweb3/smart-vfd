import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { Ctx, EventPattern, KafkaContext, Payload } from '@nestjs/microservices';
import { json } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  

  @EventPattern('input.voltage')
  readMessage(@Payload() message: any, @Ctx() context: KafkaContext) {
    const originalMessage = context.getMessage();
    Logger.log("Recieved at kafka broker",typeof originalMessage.value)
    Logger.log("Recieved at kafka broker 2:",message)
    this.appService.recordSensorData(message);
  }

  @Get("sensorsData")
  getHello(deviceId:string,metricName:string,range:string): any {
    return this.appService.getHistoricalMetric(deviceId,metricName,range)
  }
  
}

