import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  processVfdTemperature(data:string){
    console.log("Processing VFD Temperature:", data);
    // TODO: Store data in  DB
  }

  processInputVoltage(data:string){
    console.log("Processing Input Voltage:", data);
    // TODO: Store data in  DB
  }
   processInputCurrent(data:string){
    console.log("Processing Input Current:", data);
    // TODO: Store data in  DB
  }
  
  processMotorTemperature(data:string){
    console.log("Processing Motor Temperature:", data);
    // TODO: Store data in  DB
  }

  processPhaseOneVoltage(data:string){
    console.log("Processing Phase 1 Voltage:", data);
    // TODO: Store data in  DB
  }
  processPhaseOneCurrent(data:string){
    console.log("Processing Phase 1 Current:", data);
    // TODO: Store data in  DB
  }
  
  processPhaseTwoVoltage(data:string){
    console.log("Processing Phase 2 Voltage:", data);
    // TODO: Store data in  DB
  }
  processPhaseTwoCurrent(data:string){
    console.log("Processing Phase 2 Current:", data);
    // TODO: Store data in  DB
  }

  processPhaseThreeVoltage(data:string){
    console.log("Processing Phase 3 Voltage:", data);
    // TODO: Store data in  DB
  }
  processPhaseThreeCurrent(data:string){
    console.log("Processing Phase 3 Current:", data);
    // TODO: Store data in  DB
  }
  
  processMotorTorque(data:string){
    console.log("Processing Motor Torque:", data);
    // TODO: Store data in  DB
  }
  
  processMotorSpeed(data:string){
    console.log("Processing Motor Speed:", data);
    // TODO: Store data in  DB
  }



  
  

}
