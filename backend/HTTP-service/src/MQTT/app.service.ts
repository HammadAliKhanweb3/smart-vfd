import { Injectable } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";



@Injectable()
export class MqttService{


  @MessagePattern('sensors/vfdTemperature')
  handleVfdTemperature(@Payload() payload: string) {
    console.log("VFD Temperature:", payload);
    this.publishToKafka("sensors_vfdTemperature",payload)
  }
  
  @MessagePattern('sensors/inputVoltage')
  handleInputVoltage(@Payload() payload: string) {
    console.log("Input Voltage:", payload);
  }
  
  @MessagePattern('sensors/inputCurrent')
  handleInputCurrent(@Payload() payload: string) {
    console.log("Input Current:", payload);
    
  }

  @MessagePattern('sensors/motorTemperature')
  handleMotorTemperature(@Payload() payload: string) {
    console.log("Motor Temperature:", payload);
    
  }

  @MessagePattern('sensors/phase1/voltage')
  handlePhaseOneVoltage(@Payload() payload: string) {
    console.log("Phase 1 Voltage:", payload);
    
  }

  @MessagePattern('sensors/phase1/current')
  handlePhaseOneCurrent(@Payload() payload: string) {
    console.log("Phase 1 Current:", payload);
    
  }

  @MessagePattern('sensors/phase2/voltage')
  handlePhaseTwoVoltage(@Payload() payload: string) {
    console.log("Phase 2 Voltage:", payload);

  }

  @MessagePattern('sensors/phase2/current')
  handlePhaseTwoCurrent(@Payload() payload: string) {
    console.log("Phase 2 Current:", payload);

  }

  @MessagePattern('sensors/phase3/voltage')
  handlePhaseThreeVoltage(@Payload() payload: string) {
    console.log("Phase 3 Voltage:", payload);
    
  }

  @MessagePattern('sensors/phase3/current')
  handlePhaseThreeCurrent(@Payload() payload: string) {
    console.log("Phase 3 Current:", payload);
  }

  @MessagePattern('sensors/motor/torque')
  handleMotorTorque(@Payload() payload: string) {
    console.log("Motor Torque:", payload);
  }

  @MessagePattern('sensors/motor/speed')
  handleMotorSpeed(@Payload() payload: string) {
    console.log("Motor Speed:", payload);
  }
}




