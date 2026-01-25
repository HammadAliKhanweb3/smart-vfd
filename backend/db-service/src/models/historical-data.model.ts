import { Field, Float, ObjectType } from "@nestjs/graphql";



@ObjectType()
export class HistoricalData{

    @Field()
    time:string

    @Field(()=>Float)
    value:number
}