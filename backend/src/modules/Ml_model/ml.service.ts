import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientKafka, Ctx, EventPattern, KafkaContext, MessagePattern, Payload } from "@nestjs/microservices";


@Injectable()
export class MlService implements OnModuleInit{
    constructor(@Inject("KAFKA_ML") private client:ClientKafka){}

      async onModuleInit() {
    // Subscribe to the topic to ensure the consumer is connected
    this.client.subscribeToResponseOf('input.voltage');
    await this.client.connect();
    console.log('✅ ML Service connected to Kafka');
  }

    @EventPattern("input.voltage")
    async handle(@Payload() data:string,@Ctx() context:KafkaContext ){
        console.log("ML consumer:",data)  
        
           console.log('📥 ML Service received message:', data);
    // Process your ML logic here
    return { status: 'processed' };   
    }
}