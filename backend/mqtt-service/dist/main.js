"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.MQTT,
        options: {
            url: "mqtt://localhost:1883"
        }
    });
    const mqttClient = app.client;
    if (mqttClient) {
        mqttClient.on('connect', () => {
            console.log('✅ MQTT Client connected to broker');
        });
        mqttClient.on('error', (error) => {
            console.error('❌ MQTT Client error:', error);
        });
        mqttClient.on('message', (topic, message) => {
            console.log(`📨 Received MQTT message on ${topic}:`, message.toString());
        });
    }
    await app.listen();
    common_1.Logger.log("✅ MQTT microservice connected ");
}
bootstrap();
//# sourceMappingURL=main.js.map