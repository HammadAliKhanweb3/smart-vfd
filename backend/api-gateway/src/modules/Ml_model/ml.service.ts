import { Injectable, OnModuleInit } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Injectable()
export class MlService implements OnModuleInit {
  onModuleInit() {
    console.log('🚀 ML Service initialized and waiting for Kafka messages...');
  }

  @EventPattern('input.voltage') // MUST MATCH TOPIC EXACTLY
  handleVoltage(@Payload() message: any) {
    console.log('📥 ML SERVICE RECEIVED MESSAGE:', message);
    console.log("Type:",typeof message);
  }
}
