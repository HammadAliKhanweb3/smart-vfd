import { OnModuleInit } from '@nestjs/common';
export declare class AppService implements OnModuleInit {
    private client;
    private writeApi;
    private queryApi;
    onModuleInit(): void;
    recordSensorData(data: any): Promise<void>;
    getHistoricalMetric(deviceId: string, metricName: string, range?: string): Promise<any>;
}
