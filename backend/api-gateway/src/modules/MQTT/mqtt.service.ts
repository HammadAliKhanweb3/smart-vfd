import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { MqttClient } from "mqtt";

@Injectable()
export class MqttService implements OnModuleInit {
  private mqttClient: MqttClient;

  constructor(
    @Inject("KAFKA_PRODUCER") 
    private readonly kafkaClient: ClientKafka,
    @Inject("MQTT_CLIENT") 
    private readonly client: any
  ) {
    this.mqttClient = client;
    console.log('Kafka producer initialized for MQTT service');
  }

  async onModuleInit() {
     this.kafkaClient.subscribeToResponseOf("medium.rocks")
    await this.kafkaClient.connect();

    this.mqttClient.subscribe('sensors/inputVoltage', (err) => {
      if (err) console.error('❌ Error subscribing to MQTT topic:', err);
      else console.log('✅ Successfully subscribed to MQTT topic: sensors/inputVoltage');
    });

    this.mqttClient.on('message', (topic, message) => {
      console.log(`📨 Received MQTT message on ${topic}:`, message.toString());
      this.handleInputVoltage(message.toString());
    });
  }

  private async handleInputVoltage(data: string) {
    console.log('🔔 Processing MQTT message in handleInputVoltage');
    console.log('📩 Payload:', data);

    try {
       const response = await this.kafkaClient.send('medium.rocks', {foo:"bar",data}).toPromise()
       console.log(response);
       
      this.kafkaClient.emit('input.voltage', {foo:'bar', data: new Date().toString()});
      console.log('✅ Successfully sent to Kafka');
    } catch (error) {
      console.error('❌ Error sending to Kafka:', error);
    }
  }
}
