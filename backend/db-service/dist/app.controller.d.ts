import { AppService } from './app.service';
import { KafkaContext } from '@nestjs/microservices';
import { SensorData } from 'models/sensor-data.model';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    readMessage(message: SensorData, context: KafkaContext): Promise<void>;
    getHello(deviceId: string, metricName: string, range: string): any;
}
