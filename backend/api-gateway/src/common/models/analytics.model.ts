import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Anayltics{

    @Field()
    time:string

    @Field()
    value:number 
}