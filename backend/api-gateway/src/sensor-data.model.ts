import { Field, Float, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class SensorData {

@Field(()=>Float)
tempVfd:number

@Field(()=>Float)
voltageInput:number

@Field(()=>Float)
voltageP1:number

@Field(()=>Float)
voltageP2:number

@Field(()=>Float)
voltageP3:number

@Field(()=>Float)
currentP1:number

@Field(()=>Float)
currentP2:number

@Field(()=>Float)
currentP3:number

@Field(()=>Float)
tempMotor:number

@Field(()=>Float)
motorSpeed:number

@Field(()=>Float)
motorCurrent:number

@Field(()=>Float)
motorVibration:number

}