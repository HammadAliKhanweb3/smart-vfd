import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { MqttService } from "./app.service";



@Module({
    imports:[
    ClientsModule.register([
        {
            name:"KAFKA_SERVICE",
            transport:Transport.KAFKA,
            options:{
            client:{
            clientId:"mqtt-producer",           
            brokers:['localhost:9092']
            }
            }

        }
    ])
    ],
    providers:[MqttService],
    exports:[MqttService]
})
export class MqttModule{}