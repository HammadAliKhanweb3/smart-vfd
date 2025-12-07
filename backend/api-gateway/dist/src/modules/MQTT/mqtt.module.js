"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MqttModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const mqtt_service_1 = require("./mqtt.service");
const mqtt = __importStar(require("mqtt"));
let MqttModule = class MqttModule {
};
exports.MqttModule = MqttModule;
exports.MqttModule = MqttModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: "KAFKA_PRODUCER",
                    transport: microservices_1.Transport.KAFKA,
                    options: {
                        client: {
                            clientId: "hero",
                            brokers: ['localhost:9092']
                        },
                        producer: {
                            allowAutoTopicCreation: true
                        },
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
            mqtt_service_1.MqttService
        ],
        exports: [mqtt_service_1.MqttService]
    })
], MqttModule);
//# sourceMappingURL=mqtt.module.js.map