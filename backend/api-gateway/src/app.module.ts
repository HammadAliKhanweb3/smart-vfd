import { Module, ValidationPipe } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { APP_PIPE } from '@nestjs/core';

import { MqttModule } from './modules/MQTT/mqtt.module';
import { DbModule } from './modules/db/db.module';
import { FrontendModule } from './modules/Frontend/frontend.module';
import { AppResolver } from './app.resolver';
import { MlModule } from './modules/Ml_model/ml.module';

@Module({
  imports: [
    MlModule, // ⚡ MUST be on top
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      subscriptions: { 'graphql-ws': true },
      playground: true,
    }),
    MqttModule,
    DbModule,
    FrontendModule,
  ],
  providers: [
    { provide: APP_PIPE, useClass: ValidationPipe },
    AppResolver,
  ],
})
export class AppModule {}
