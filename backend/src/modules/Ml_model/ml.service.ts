import { Injectable } from "@nestjs/common";
import { EventPattern, MessagePattern, Payload } from "@nestjs/microservices";

@Injectable()
export class MlService {

  @MessagePattern("input.voltage")  // MUST match the Kafka topic exactly
  handleVoltage(@Payload() data: any) {
    console.log("📥 ML CONSUMER RECEIVED:", data);
    // Do your ML processing here
  }
}
