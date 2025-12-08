import { Module, ValidationPipe } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { APP_PIPE } from '@nestjs/core';
import { AppResolver } from './app.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      subscriptions: { 'graphql-ws': true },
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    { provide: APP_PIPE, useClass: ValidationPipe },
    AppResolver,AppService
  ],})
export class AppModule {}
