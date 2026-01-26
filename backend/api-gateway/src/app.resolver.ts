import { Resolver, Query, Subscription, Args, } from '@nestjs/graphql';
import { pubSub } from "./pubSub" 
import { SensorData } from './sensor-data.model';
import { Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { Anayltics } from './common/models/analytics.model';




@Resolver()
export class AppResolver {
  constructor(private readonly appservice: AppService) {}

  @Query(()=>[Anayltics], {name:"getAnalyticsData"})
  async getAnalyticsData(@Args("deviceId") deviceId:string,@Args("metricName")metricName:string,@Args("range") range:string): Promise<Anayltics[]> {
   return await this.appservice.getAnalyticsData({deviceId,metricName,range}) 
  }

  @Subscription(()=>SensorData)
  inputVoltage() {
    Logger.log("Subscription to inputVoltage called");
    return pubSub.asyncIterableIterator('inputVoltage')
  }
}
