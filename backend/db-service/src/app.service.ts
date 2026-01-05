import { Injectable, OnModuleInit } from '@nestjs/common';
import { InfluxDB, Point } from '@influxdata/influxdb-client';

@Injectable()
export class AppService implements OnModuleInit {
  private client: InfluxDB;
  private writeApi: any;
  private queryApi: any;

  onModuleInit() {
    this.client = new InfluxDB({ 
      url: 'http://localhost:8086', 
      token: 'my-super-secret-admin-token' 
    });
    this.writeApi = this.client.getWriteApi('my-org', 'sensor-bucket');
    this.queryApi = this.client.getQueryApi('my-org');
  }

  // 1. SAVE MULTIPLE MOTOR METRICS
  async recordSensorData(deviceId: string, data: any) {
    // We create one "Point" for this specific moment in time
    const point = new Point('motor_telemetry')
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
  async getHistoricalMetric(deviceId: string, metricName: string, range: string = '-1h') {
    const fluxQuery = `
      from(bucket: "sensor-bucket")
        |> range(start: ${range})
        |> filter(fn: (r) => r._measurement == "motor_telemetry" and r.sensor_id == "${deviceId}")
        |> filter(fn: (r) => r._field == "${metricName}")
        |> aggregateWindow(every: 1m, fn: mean, createEmpty: false)
    `;
    return this.queryApi.collectRows(fluxQuery);
  }
}