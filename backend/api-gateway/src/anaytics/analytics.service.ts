import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { request, gql } from 'graphql-request';
import { Anayltics } from "src/common/models/analytics.model";


export interface AnalyticsDataInterface {
    deviceId: string;
    metricName: string;
    range:string
}

interface GraphQlResponse{
    historicalData:{
        time:string,
        value:string
    }[]
}


@Injectable()
export class AnalyticsService {

    constructor(private ConfigModule:ConfigService) {}

    async getAnalyticsData({deviceId,metricName,range}:AnalyticsDataInterface):Promise<Anayltics[]> {
       
        Logger.log(`Before GraphQL Request:✅`);
        const endpoint = this.ConfigModule.getOrThrow<string>('DB_SERVICE_URL');
        Logger.log(`GraphQL Endpoint: ${endpoint}`);
        
        const variables={
            deviceId,
            metricName,
            range
        }
        
        const query = gql`
        query GetData($deviceId:String!,$metricName:String!,$range:String!){
        
         historicalData(deviceId:$deviceId,metricName:$metricName,range:$range){
         time 
         value
         }
        } `

       try {
         const response = await request<GraphQlResponse>(endpoint,query,variables)

         Logger.log(response)
        
         return response.historicalData as unknown as Anayltics[]
         
     
       } catch (error) {
           Logger.log(error)
           throw error
       }
}

}