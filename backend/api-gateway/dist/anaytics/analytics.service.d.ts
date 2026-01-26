import { ConfigService } from "@nestjs/config";
import { Anayltics } from "src/common/models/analytics.model";
export interface AnalyticsDataInterface {
    deviceId: string;
    metricName: string;
    range: string;
}
export declare class AnalyticsService {
    private ConfigModule;
    constructor(ConfigModule: ConfigService);
    getAnalyticsData({ deviceId, metricName, range }: AnalyticsDataInterface): Promise<Anayltics[]>;
}
