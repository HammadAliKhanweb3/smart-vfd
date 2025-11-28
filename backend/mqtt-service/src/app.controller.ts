import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('sensors/vfdTemperature')
  handleVfdTemperature(@Payload() payload: string) {
    console.log("VFD Temperature:", payload);
    this.appService.processVfdTemperature(payload);
  }
  
  @MessagePattern('sensors/inputVoltage')
  handleInputVoltage(@Payload() payload: string) {
    console.log("Input Voltage:", payload);
    this.appService.processInputVoltage(payload);
  }
  
  @MessagePattern('sensors/inputCurrent')
  handleInputCurrent(@Payload() payload: string) {
    console.log("Input Current:", payload);
    this.appService.processInputCurrent(payload);
  }

  @MessagePattern('sensors/motorTemperature')
  handleMotorTemperature(@Payload() payload: string) {
    console.log("Motor Temperature:", payload);
    this.appService.processMotorTemperature(payload);
  }

  @MessagePattern('sensors/phase1/voltage')
  handlePhaseOneVoltage(@Payload() payload: string) {
    console.log("Phase 1 Voltage:", payload);
    this.appService.processPhaseOneVoltage(payload);
  }

  @MessagePattern('sensors/phase1/current')
  handlePhaseOneCurrent(@Payload() payload: string) {
    console.log("Phase 1 Current:", payload);
    this.appService.processPhaseOneCurrent(payload);
  }

  @MessagePattern('sensors/phase2/voltage')
  handlePhaseTwoVoltage(@Payload() payload: string) {
    console.log("Phase 2 Voltage:", payload);
    this.appService.processPhaseTwoVoltage(payload);
  }

  @MessagePattern('sensors/phase2/current')
  handlePhaseTwoCurrent(@Payload() payload: string) {
    console.log("Phase 2 Current:", payload);
    this.appService.processPhaseTwoCurrent(payload);
  }

  @MessagePattern('sensors/phase3/voltage')
  handlePhaseThreeVoltage(@Payload() payload: string) {
    console.log("Phase 3 Voltage:", payload);
    this.appService.processPhaseThreeVoltage(payload);
  }

  @MessagePattern('sensors/phase3/current')
  handlePhaseThreeCurrent(@Payload() payload: string) {
    console.log("Phase 3 Current:", payload);
    this.appService.processPhaseThreeCurrent(payload);
  }

  @MessagePattern('sensors/motor/torque')
  handleMotorTorque(@Payload() payload: string) {
    console.log("Motor Torque:", payload);
    this.appService.processMotorTorque(payload);
  }

  @MessagePattern('sensors/motor/speed')
  handleMotorSpeed(@Payload() payload: string) {
    console.log("Motor Speed:", payload);
    this.appService.processMotorSpeed(payload);
  }
}
