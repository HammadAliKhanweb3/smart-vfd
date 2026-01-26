import { AppService } from './app.service';
import { Anayltics } from './common/models/analytics.model';
export declare class AppResolver {
    private readonly appservice;
    constructor(appservice: AppService);
    getAnalyticsData(deviceId: string, metricName: string, range: string): Promise<Anayltics[]>;
    inputVoltage(): import("graphql-subscriptions/dist/pubsub-async-iterable-iterator").PubSubAsyncIterableIterator<unknown>;
}
