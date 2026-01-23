import { Logger } from "@nestjs/common";
import {Query, Resolver } from "@nestjs/graphql";



@Resolver()
export class AppResolver {
    constructor(){
        Logger.log("GraphQL Resolver initialized")
    }
    @Query(()=>String)
    hello():string{
        return "Hello GraphQL from db"
    }
}
