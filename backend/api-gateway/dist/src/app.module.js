"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const path_1 = require("path");
const core_1 = require("@nestjs/core");
const db_module_1 = require("./modules/db/db.module");
const frontend_module_1 = require("./modules/Frontend/frontend.module");
const app_resolver_1 = require("./app.resolver");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                sortSchema: true,
                subscriptions: { 'graphql-ws': true },
                playground: true,
            }),
            db_module_1.DbModule,
            frontend_module_1.FrontendModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            { provide: core_1.APP_PIPE, useClass: common_1.ValidationPipe },
            app_resolver_1.AppResolver, app_service_1.AppService
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map