import { MqttServiceService } from './mqtt-service.service';
export declare class MqttServiceController {
    private readonly mqttServiceService;
    constructor(mqttServiceService: MqttServiceService);
    getHello(): string;
}
