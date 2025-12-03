import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { MqttService } from "./mqtt.service";



@Module({
    imports:[
    ClientsModule.register([
        {
            name:"KAFKA_PRODUCER",
            transport:Transport.KAFKA,
            options:{
            client:{
            clientId:"mqtt-producer",           
            brokers:['localhost:9092']
            },
            producer:{
                allowAutoTopicCreation:true
            }
            }

        }
    ])
    ],
    providers:[MqttService],
    exports:[MqttService]
})
export class MqttModule{}