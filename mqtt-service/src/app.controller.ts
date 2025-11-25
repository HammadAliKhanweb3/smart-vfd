import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

   @MessagePattern('sensors/temperature')
   handleTemperature(@Payload() payload:string){
   console.log("Mosfet's Temperature:",payload);
    this.appService.processTemperature(payload)
   }
  
   @MessagePattern("sensors/voltage")
   handleVoltage(@Payload() payload:string){
    console.log("Phase 1 Voltage:",payload);
    this.appService.processVoltage(payload)
   }



}
