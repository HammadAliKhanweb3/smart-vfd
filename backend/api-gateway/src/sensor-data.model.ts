import { Field, Float, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class SensorData {

@Field(()=>Float,{nullable:true})
tempVfd:number

@Field(()=>Float,{nullable:true})
voltageInput:number

@Field(()=>Float,{nullable:true})
voltageP1:number

@Field(()=>Float,{nullable:true})
voltageP2:number

@Field(()=>Float,{nullable:true})
voltageP3:number

@Field(()=>Float,{nullable:true})
currentP1:number

@Field(()=>Float,{nullable:true})
currentP2:number

@Field(()=>Float,{nullable:true})
currentP3:number

@Field(()=>Float,{nullable:true})
tempMotor:number

@Field(()=>Float,{nullable:true})
motorSpeed:number

@Field(()=>Float,{nullable:true}    )
motorCurrent:number

@Field(()=>Float,{nullable:true})
motorVibration:number

}