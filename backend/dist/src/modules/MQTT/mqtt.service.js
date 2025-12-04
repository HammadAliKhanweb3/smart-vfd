"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MqttService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let MqttService = class MqttService {
    kafkaClient;
    client;
    mqttClient;
    constructor(kafkaClient, client) {
        this.kafkaClient = kafkaClient;
        this.client = client;
        this.mqttClient = client;
        console.log('Kafka producer initialized for MQTT service');
    }
    async onModuleInit() {
        await this.kafkaClient.connect();
        console.log('🔍 Subscribing to MQTT topic: sensors/inputVoltage');
        this.mqttClient.subscribe('sensors/inputVoltage', (err) => {
            if (err) {
                console.error('❌ Error subscribing to MQTT topic:', err);
            }
            else {
                console.log('✅ Successfully subscribed to MQTT topic: sensors/inputVoltage');
            }
        });
        this.mqttClient.on('message', (topic, message) => {
            console.log(`📨 Received MQTT message on ${topic}:`, message.toString());
            this.handleInputVoltage(message.toString());
        });
    }
    async handleInputVoltage(data) {
        console.log('🔔 Processing MQTT message in handleInputVoltage');
        console.log('📩 Payload:', data);
        try {
            console.log('📤 Sending to Kafka topic: input-voltage');
            await this.kafkaClient.emit('input.voltage', {
                value: data,
                headers: {
                    'message-type': 'sensor-data',
                    'timestamp': new Date().toISOString()
                }
            }).toPromise();
            console.log('✅ Successfully sent to Kafka');
        }
        catch (error) {
            console.error('❌ Error sending to Kafka:', error);
        }
    }
};
exports.MqttService = MqttService;
exports.MqttService = MqttService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("KAFKA_PRODUCER")),
    __param(1, (0, common_1.Inject)("MQTT_CLIENT")),
    __metadata("design:paramtypes", [microservices_1.ClientKafka, Object])
], MqttService);
//# sourceMappingURL=mqtt.service.js.map