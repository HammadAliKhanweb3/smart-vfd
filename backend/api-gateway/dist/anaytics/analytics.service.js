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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const graphql_request_1 = require("graphql-request");
let AnalyticsService = class AnalyticsService {
    ConfigModule;
    constructor(ConfigModule) {
        this.ConfigModule = ConfigModule;
    }
    async getAnalyticsData({ deviceId, metricName, range }) {
        common_1.Logger.log(`Before GraphQL Request:✅`);
        const endpoint = this.ConfigModule.getOrThrow('DB_SERVICE_URL');
        common_1.Logger.log(`GraphQL Endpoint: ${endpoint}`);
        const variables = {
            deviceId,
            metricName,
            range
        };
        const query = (0, graphql_request_1.gql) `
        query GetData($deviceId:String!,$metricName:String!,$range:String!){
        
         historicalData(deviceId:$deviceId,metricName:$metricName,range:$range){
         time 
         value
         }
        } `;
        try {
            const response = await (0, graphql_request_1.request)(endpoint, query, variables);
            common_1.Logger.log(response);
            return response.historicalData;
        }
        catch (error) {
            common_1.Logger.log(error);
            throw error;
        }
    }
};
exports.AnalyticsService = AnalyticsService;
exports.AnalyticsService = AnalyticsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AnalyticsService);
//# sourceMappingURL=analytics.service.js.map