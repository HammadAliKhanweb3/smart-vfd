import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
export declare class AppController implements OnModuleInit, OnModuleDestroy {
    private readonly client;
    constructor(client: ClientKafka);
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    handleInputVoltage(message: string): Promise<void>;
}
