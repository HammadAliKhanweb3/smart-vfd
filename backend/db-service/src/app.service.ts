  import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
  import { InfluxDB, Point } from '@influxdata/influxdb-client';
  import { SensorData } from './models/sensor-data.model';
  import { WriteApi } from '@influxdata/influxdb-client';
  import { QueryApi } from '@influxdata/influxdb-client';

  @Injectable()
  export class AppService implements OnModuleInit {
    private client: InfluxDB;
    private writeApi: WriteApi;
    private queryApi: QueryApi;

    onModuleInit() {
      this.client = new InfluxDB({ 
        url: 'http://influxdb:8086', 
        token: "my-super-secret-token"
      });
      this.writeApi = this.client.getWriteApi('smart-vfd', 'sensors_bucket');
      this.queryApi = this.client.getQueryApi('smart-vfd');
    }

    // 1. SAVE MULTIPLE MOTOR METRICS
    async recordSensorData( data:SensorData ) {
      Logger.log("Recording sensor data to InfluxDB:",data);
      Logger.log("Recording sensor data to InfluxDB of current:",data.currentP1);
      
      const deviceId = "vfd"
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
      const fluxQuery =`
        from(bucket: "sensors_bucket")
          |> range(start: ${range})
          |> filter(fn: (r) =>  r.device == "${deviceId}")
          |> filter(fn: (r) => r._field == "${metricName}")
          |> aggregateWindow(every: 1m, fn: mean, createEmpty: false)
      `;
      return await this.queryApi.collectRows(fluxQuery);
    }
  }