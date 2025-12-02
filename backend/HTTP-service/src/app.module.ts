
import { Module, ValidationPipe } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { APP_PIPE } from '@nestjs/core';
import { MqttModule } from './mqtt/mqtt.module';

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
],
providers:[
  {provide:APP_PIPE,
  useClass:ValidationPipe}
]
})


export class AppModule{}
