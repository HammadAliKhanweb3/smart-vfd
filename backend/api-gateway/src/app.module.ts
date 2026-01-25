import { Module, ValidationPipe } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
   //   subscriptions: { 'graphql-ws': true },
       subscriptions: {
    'graphql-ws': {
      path: '/graphql',
      onConnect: (context: any) => {
        console.log('🔌 GraphQL-WS Client connected');
        return true;
      },
    },

    'subscriptions-transport-ws': {
      path:"/graphql",
      onConnect: () => {
        console.log('🔌 Subscriptions-Transport-WS Client connected');
      },
    },
  },

    }),
  ],
  controllers: [AppController],
  providers: [
    { provide: APP_PIPE, useClass: ValidationPipe },
    AppResolver,AppService
  ],})
export class AppModule {}
