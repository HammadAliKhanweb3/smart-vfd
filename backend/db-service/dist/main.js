"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.connectMicroservice({
        transport: microservices_1.Transport.KAFKA,
        options: {
            client: {
                clientId: "db",
                brokers: [process.env.KAFKA_BROKER || 'kafka:9092']
            },
            consumer: { groupId: 'db-consumer' },
        },
    });
    await app.startAllMicroservices();
    common_1.Logger.log("DB Service Microservice is listening to Kafka messages...");
    await app.listen(4000);
    common_1.Logger.log('DB Service + Kafka Consumer running...');
}
bootstrap();
//# sourceMappingURL=main.js.map