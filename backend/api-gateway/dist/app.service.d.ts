import { AnalyticsDataInterface, AnalyticsService } from './anaytics/analytics.service';
import { Anayltics } from './common/models/analytics.model';
export declare class AppService {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
    getAnalyticsData({ deviceId, metricName, range }: AnalyticsDataInterface): Promise<Anayltics[]>;
}
