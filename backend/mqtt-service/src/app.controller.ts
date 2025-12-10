import {Controller, Get, Inject, Logger, OnModuleDestroy, OnModuleInit} from '@nestjs/common';
import { ClientKafka, Ctx, MessagePattern, MqttContext, Payload } from '@nestjs/microservices';

@Controller()
export class AppController implements OnModuleInit, OnModuleDestroy{
  constructor(
    @Inject('KAFKA_PRODUCER') private readonly client: ClientKafka,
  ) {}

  async onModuleInit() {
    await this.client.connect();
  }

  async onModuleDestroy() {
    await this.client.close();
  }

  @MessagePattern("sensors/inputVoltage")
  async handleInputVoltage(@Payload() message:string) {
    Logger.log("Successfully  recieve message from sensor:",message)
    this.client.emit("input.voltage",message)
    Logger.log("Successfully sent emited message")

  }
}