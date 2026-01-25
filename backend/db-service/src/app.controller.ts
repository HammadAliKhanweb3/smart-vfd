import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { Ctx, EventPattern, KafkaContext, Payload } from '@nestjs/microservices';
import { SensorData } from 'models/sensor-data.model';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  

  @EventPattern('input.voltage')
  async readMessage(@Payload() message: SensorData, @Ctx() context: KafkaContext) {
    const originalMessage = context.getMessage();
    Logger.log("Recieved at kafka broker",typeof originalMessage.value)
    Logger.log("Recieved at kafka broker 2:",message)
    await this.appService.recordSensorData(message);
  }

  @Get("sensorsData")
  getHello(deviceId:string,metricName:string,range:string): any {
    return this.appService.getHistoricalMetric(deviceId,metricName,range)
  }
  
}

