
import { Module, ValidationPipe } from '@nestjs/common'; import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { APP_PIPE } from '@nestjs/core';
import { MqttModule } from './modules/MQTT/mqtt.module';
import { FrontendModule } from './modules/Frontend/frontend.module';
import { DbModule } from './modules/db/db.module';
import { MlModule } from './modules/Ml_model/ml.module';
import { AppResolver } from './app.resolver';



@Module({
imports:[
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver:ApolloDriver,
    autoSchemaFile:join(process.cwd(),'src/schema.gql'),
    sortSchema:true,
     subscriptions: {
    'graphql-ws': true,
  },
    playground:true
  }),
  MqttModule,
  DbModule,
  FrontendModule,
  MlModule
],
providers:[
  {provide:APP_PIPE,
  useClass:ValidationPipe,
},
AppResolver
]
})


export class AppModule{}
