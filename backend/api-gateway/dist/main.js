"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.connectMicroservice({
        transport: microservices_1.Transport.KAFKA,
        options: {
            client: {
                clientId: "api-gateway",
                brokers: ['localhost:9092'],
            },
            consumer: { groupId: 'api-gateway-consumer' },
        },
    });
    await app.startAllMicroservices();
    await app.listen(process.env.PORT ?? 3000);
    console.log('HTTP server + Kafka ML Consumer running...');
}
bootstrap();
//# sourceMappingURL=main.js.map