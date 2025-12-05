"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const kafkaMicroservice = app.connectMicroservice({
        transport: microservices_1.Transport.KAFKA,
        options: {
            client: { clientId: "sensors", brokers: ['localhost:9092'] },
            consumer: {
                groupId: "ml-consumer-group",
                allowAutoTopicCreation: true,
            },
        },
    });
    await app.startAllMicroservices();
    await app.listen(process.env.PORT ?? 3000);
    console.log('HTTP server running on port 3000');
}
bootstrap().catch((error) => {
    console.error("❌ Error Starting application:", error);
    process.exit(1);
});
//# sourceMappingURL=main.js.map