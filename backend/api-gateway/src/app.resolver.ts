import { Resolver, Query, Subscription, } from '@nestjs/graphql';
import { pubSub } from "./pubSub" 
import { SensorData } from './sensor-data.model';
import { Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { Anayltics } from './models/analytics.model';




@Resolver()
export class AppResolver {
  constructor(private readonly appservice: AppService) {}
  @Query(()=>[Anayltics], {name:"getAnalyticsData"})
  getAnalyticsData(): Promise<Anayltics[]> {
    return [
      { time: "2023-01-01T00:00:00Z", value: 123 },
      { time: "2023-01-01T01:00:00Z", value: 456 }
    ];  
  }

  @Subscription(()=>SensorData)
  inputVoltage() {
    Logger.log("Subscription to inputVoltage called");
    return pubSub.asyncIterableIterator('inputVoltage')
  }
}
