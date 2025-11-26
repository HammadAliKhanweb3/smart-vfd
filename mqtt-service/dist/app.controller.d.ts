import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    handleVfdTemperature(payload: string): void;
    handleInputVoltage(payload: string): void;
    handleInputCurrent(payload: string): void;
    handleMotorTemperature(payload: string): void;
    handlePhaseOneVoltage(payload: string): void;
    handlePhaseOneCurrent(payload: string): void;
    handlePhaseTwoVoltage(payload: string): void;
    handlePhaseTwoCurrent(payload: string): void;
    handlePhaseThreeVoltage(payload: string): void;
    handlePhaseThreeCurrent(payload: string): void;
    handleMotorTorque(payload: string): void;
    handleMotorSpeed(payload: string): void;
}
