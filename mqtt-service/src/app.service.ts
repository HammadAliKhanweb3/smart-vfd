import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  processTemperature(data:string){
    console.log("Saving Temperature",data);
  // TODO: Store data in  DB
  }

  processVoltage(data:string){
     console.log("Saving Temperature",data);
       // TODO: Store data in  DB
  }

}
