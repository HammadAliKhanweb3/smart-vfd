import { Resolver, Query, Subscription, Float } from '@nestjs/graphql';
import { pubSub } from "./pubSub" 

@Resolver()
export class AppResolver {
  constructor() {
        console.log('✅ AppResolver LOADED');
  }
  @Query(()=>String)
  hello(): string {
    return "Hello World!"
  }

  @Subscription(()=>Float)
  inputVoltage() {
    console.log("recieved in subsc");
    return pubSub.asyncIterableIterator('inputVoltage')
  }
}
