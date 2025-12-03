import { Inject, Injectable } from "@nestjs/common";
import { ClientKafka, MessagePattern } from "@nestjs/microservices";


@Injectable()
export class MlService{
    constructor(@Inject("KAFKA_ML") private client:ClientKafka){}

    @MessagePattern("input-voltage")
    async handle(data:string){
        console.log("ML consumer:",data)     
    }
}