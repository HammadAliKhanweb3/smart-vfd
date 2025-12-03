import { ClientKafka } from "@nestjs/microservices";
export declare class MlService {
    private client;
    constructor(client: ClientKafka);
    handle(data: string): Promise<void>;
}
