import { AppService } from "app.service";
import { HistoricalData } from "models/historical-data.model";
export declare class AppResolver {
    private readonly appService;
    constructor(appService: AppService);
    historicalData(deviceId: string, metricName: string, range: string): Promise<HistoricalData[]>;
}
