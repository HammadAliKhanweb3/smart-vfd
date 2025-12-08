import { AppService } from './app.service';
import { KafkaContext } from '@nestjs/microservices';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    readMessage(message: any, context: KafkaContext): void;
}
