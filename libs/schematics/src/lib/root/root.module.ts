import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { join } from 'node:path';
import * as process from 'node:process';
import { UsersModule } from '../users';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true, // process.env.NODE_ENV === 'production' || join(__dirname, 'assets/schema.graphql')
      sortSchema: true

      // playground: true,
      // plugins: [ApolloServerPluginLandingPageLocalDefault()]
    })
  ]
})
export class RootModule {
}
