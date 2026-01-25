import { AppService } from "app.service";
export declare class AppResolver {
    private readonly appService;
    constructor(appService: AppService);
    historicalData(deviceId: string, metricName: string, range: string): Promise<{
        time: string;
        value: number;
    }[]>;
}
