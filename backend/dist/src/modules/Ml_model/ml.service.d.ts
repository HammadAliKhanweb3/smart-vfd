import { KafkaContext } from "@nestjs/microservices";
export declare class MlService {
    handle(data: string, context: KafkaContext): Promise<{
        status: string;
    }>;
}
