import { Injectable } from '@nestjs/common';
import { AnalyticsDataInterface, AnalyticsService } from './anaytics/analytics.service';
import { Anayltics } from './common/models/analytics.model';

// import { PrismaService } from './prisma.service';
// import { SensorsData,Prisma } from './generated/prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly analyticsService:AnalyticsService) {}

  async getAnalyticsData({deviceId,metricName,range}:AnalyticsDataInterface):Promise<Anayltics[]>{
    return await this.analyticsService.getAnalyticsData({deviceId,metricName,range})

  }

  
}
