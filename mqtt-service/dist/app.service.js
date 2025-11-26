"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    processVfdTemperature(data) {
        console.log("Processing VFD Temperature:", data);
    }
    processInputVoltage(data) {
        console.log("Processing Input Voltage:", data);
    }
    processInputCurrent(data) {
        console.log("Processing Input Current:", data);
    }
    processMotorTemperature(data) {
        console.log("Processing Motor Temperature:", data);
    }
    processPhaseOneVoltage(data) {
        console.log("Processing Phase 1 Voltage:", data);
    }
    processPhaseOneCurrent(data) {
        console.log("Processing Phase 1 Current:", data);
    }
    processPhaseTwoVoltage(data) {
        console.log("Processing Phase 2 Voltage:", data);
    }
    processPhaseTwoCurrent(data) {
        console.log("Processing Phase 2 Current:", data);
    }
    processPhaseThreeVoltage(data) {
        console.log("Processing Phase 3 Voltage:", data);
    }
    processPhaseThreeCurrent(data) {
        console.log("Processing Phase 3 Current:", data);
    }
    processMotorTorque(data) {
        console.log("Processing Motor Torque:", data);
    }
    processMotorSpeed(data) {
        console.log("Processing Motor Speed:", data);
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map