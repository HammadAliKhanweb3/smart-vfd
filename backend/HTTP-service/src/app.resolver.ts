import { Resolver } from "@nestjs/graphql";


@Resolver
export class AppResolver{
    constructor(private readonly App)

}