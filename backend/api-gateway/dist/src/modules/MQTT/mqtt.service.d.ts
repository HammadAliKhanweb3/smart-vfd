import { OnModuleInit } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
export declare class MqttService implements OnModuleInit {
    private readonly kafkaClient;
    private readonly client;
    private mqttClient;
    constructor(kafkaClient: ClientKafka, client: any);
    onModuleInit(): Promise<void>;
    private handleInputVoltage;
}
