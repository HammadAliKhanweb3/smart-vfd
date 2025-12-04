// Update your mqtt.module.ts with this code
import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { MqttService } from "./mqtt.service";
import * as mqtt from 'mqtt';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "KAFKA_PRODUCER",
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: "mqtt-producer",
            brokers: ['localhost:9092']
          },
          producer: {
            allowAutoTopicCreation: true
          }
        }
      }
    ])
  ],
  providers: [
    {
      provide: 'MQTT_CLIENT',
      useFactory: () => {
        console.log('🔌 Creating MQTT client...');
        const client = mqtt.connect('mqtt://localhost:1883', {
          clientId: `mqtt_${Math.random().toString(16).substr(2, 8)}`,
          clean: true,
          connectTimeout: 4000,
          reconnectPeriod: 1000,
        });

        client.on('connect', () => {
          console.log('✅ MQTT Client connected to broker');
        });

        client.on('error', (error) => {
          console.error('❌ MQTT Client error:', error);
        });

        client.on('offline', () => {
          console.log('⚠️  MQTT Client is offline');
        });

        client.on('reconnect', () => {
          console.log('🔄 MQTT Client reconnecting...');
        });

        return client;
      }
    },
    MqttService
  ],
  exports: [MqttService]
})
export class MqttModule {}