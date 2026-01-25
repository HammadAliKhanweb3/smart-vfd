import { OnModuleInit } from '@nestjs/common';
import { SensorData } from './models/sensor-data.model';
export declare class AppService implements OnModuleInit {
    private client;
    private writeApi;
    private queryApi;
    onModuleInit(): void;
    recordSensorData(data: SensorData): Promise<void>;
    getHistoricalMetric(deviceId: string, metricName: string, range?: string): Promise<unknown[]>;
}
