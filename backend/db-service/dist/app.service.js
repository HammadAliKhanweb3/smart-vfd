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
const influxdb_client_1 = require("@influxdata/influxdb-client");
let AppService = class AppService {
    client;
    writeApi;
    queryApi;
    onModuleInit() {
        this.client = new influxdb_client_1.InfluxDB({
            url: 'http://influxdb:8086',
            token: "my-super-secret-token"
        });
        this.writeApi = this.client.getWriteApi('smart-vfd', 'sensors_bucket');
        this.queryApi = this.client.getQueryApi('smart-vfd');
    }
    // 1. SAVE MULTIPLE MOTOR METRICS
    async recordSensorData(data) {
        common_1.Logger.log("Recording sensor data to InfluxDB:", data);
        common_1.Logger.log("Recording sensor data to InfluxDB of current:", data.currentP1);
        const deviceId = "vfd";
        // We create one "Point" for this specific moment in time
        const point = new influxdb_client_1.Point('motor_telemetry')
            .tag('device', deviceId) // Use tags for metadata/searching
            .floatField('currentP1', data.currentP1)
            .floatField('currentP2', data.currentP2)
            .floatField('currentP3', data.currentP3)
            .floatField('motorCurrent', data.motorCurrent)
            .floatField('motorSpeed', data.motorSpeed)
            .floatField('motorVibration', data.motorVibration)
            .floatField('tempMotor', data.tempMotor)
            .floatField('tempVfd', data.tempVfd)
            .floatField('voltageInput', data.voltageInput)
            .floatField('voltageP1', data.voltageP1)
            .floatField('voltageP2', data.voltageP2)
            .floatField('voltageP3', data.voltageP3);
        this.writeApi.writePoint(point);
        await this.writeApi.flush();
    }
    // 2. RETRIEVE A SPECIFIC METRIC (e.g., motorSpeed)
    async getHistoricalMetric(deviceId, metricName, range = '-1h') {
        const fluxQuery = `
        from(bucket: "sensors_bucket")
          |> range(start: ${range})
          |> filter(fn: (r) =>  r.device == "${deviceId}")
          |> filter(fn: (r) => r._field == "${metricName}")
          |> aggregateWindow(every: 1m, fn: mean, createEmpty: false)
      `;
        return await this.queryApi.collectRows(fluxQuery);
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map