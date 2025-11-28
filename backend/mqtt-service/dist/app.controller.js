"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const microservices_1 = require("@nestjs/microservices");
let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    handleVfdTemperature(payload) {
        console.log("VFD Temperature:", payload);
        this.appService.processVfdTemperature(payload);
    }
    handleInputVoltage(payload) {
        console.log("Input Voltage:", payload);
        this.appService.processInputVoltage(payload);
    }
    handleInputCurrent(payload) {
        console.log("Input Current:", payload);
        this.appService.processInputCurrent(payload);
    }
    handleMotorTemperature(payload) {
        console.log("Motor Temperature:", payload);
        this.appService.processMotorTemperature(payload);
    }
    handlePhaseOneVoltage(payload) {
        console.log("Phase 1 Voltage:", payload);
        this.appService.processPhaseOneVoltage(payload);
    }
    handlePhaseOneCurrent(payload) {
        console.log("Phase 1 Current:", payload);
        this.appService.processPhaseOneCurrent(payload);
    }
    handlePhaseTwoVoltage(payload) {
        console.log("Phase 2 Voltage:", payload);
        this.appService.processPhaseTwoVoltage(payload);
    }
    handlePhaseTwoCurrent(payload) {
        console.log("Phase 2 Current:", payload);
        this.appService.processPhaseTwoCurrent(payload);
    }
    handlePhaseThreeVoltage(payload) {
        console.log("Phase 3 Voltage:", payload);
        this.appService.processPhaseThreeVoltage(payload);
    }
    handlePhaseThreeCurrent(payload) {
        console.log("Phase 3 Current:", payload);
        this.appService.processPhaseThreeCurrent(payload);
    }
    handleMotorTorque(payload) {
        console.log("Motor Torque:", payload);
        this.appService.processMotorTorque(payload);
    }
    handleMotorSpeed(payload) {
        console.log("Motor Speed:", payload);
        this.appService.processMotorSpeed(payload);
    }
};
exports.AppController = AppController;
__decorate([
    (0, microservices_1.MessagePattern)('sensors/vfdTemperature'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "handleVfdTemperature", null);
__decorate([
    (0, microservices_1.MessagePattern)('sensors/inputVoltage'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "handleInputVoltage", null);
__decorate([
    (0, microservices_1.MessagePattern)('sensors/inputCurrent'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "handleInputCurrent", null);
__decorate([
    (0, microservices_1.MessagePattern)('sensors/motorTemperature'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "handleMotorTemperature", null);
__decorate([
    (0, microservices_1.MessagePattern)('sensors/phase1/voltage'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "handlePhaseOneVoltage", null);
__decorate([
    (0, microservices_1.MessagePattern)('sensors/phase1/current'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "handlePhaseOneCurrent", null);
__decorate([
    (0, microservices_1.MessagePattern)('sensors/phase2/voltage'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "handlePhaseTwoVoltage", null);
__decorate([
    (0, microservices_1.MessagePattern)('sensors/phase2/current'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "handlePhaseTwoCurrent", null);
__decorate([
    (0, microservices_1.MessagePattern)('sensors/phase3/voltage'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "handlePhaseThreeVoltage", null);
__decorate([
    (0, microservices_1.MessagePattern)('sensors/phase3/current'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "handlePhaseThreeCurrent", null);
__decorate([
    (0, microservices_1.MessagePattern)('sensors/motor/torque'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "handleMotorTorque", null);
__decorate([
    (0, microservices_1.MessagePattern)('sensors/motor/speed'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "handleMotorSpeed", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map