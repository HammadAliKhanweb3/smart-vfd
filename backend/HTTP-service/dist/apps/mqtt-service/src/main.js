"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const mqtt_service_module_1 = require("./mqtt-service.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(mqtt_service_module_1.MqttServiceModule, {
        transport: microservices_1.Transport.MQTT,
        options: {
            url: 'mqtt://localhost:1883',
        },
    });
    app.listen();
    console.log("🚀 Mqqt Microservice is listening...");
}
bootstrap();
//# sourceMappingURL=main.js.map