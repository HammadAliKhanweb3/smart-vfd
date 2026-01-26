import { Logger } from "@nestjs/common";
import {Args, Query, Resolver } from "@nestjs/graphql";
import { AppService } from "app.service";
import { HistoricalData } from "models/historical-data.model";

interface InfluxRow {
    _time: string;
    _value: number;
}

@Resolver()
export class AppResolver {
    constructor(private readonly appService: AppService){
        
    }
    @Query(()=>[HistoricalData],{name:"historicalData"})
    
    async historicalData(@Args('deviceId') deviceId: string,@Args("metricName")metricName: string,@Args("range")range: string):Promise<HistoricalData[]>{ 
     const result = await this.appService.getHistoricalMetric(deviceId,metricName,range) as InfluxRow[]
        Logger.log("GraphQL Query Result:",result)
        return result.map((row)=>({
            time :row._time,
            value : row._value
        }))

    }
} 