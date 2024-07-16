import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { UsersModule } from './users/users.module';
import { join, dirname } from 'node:path';
import * as process from 'node:process';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      autoSchemaFile: true
      // autoSchemaFile: join(process.env.NODE_ENV === 'production'
      //   ? process.cwd()
      //   : `${process.env.NX_WORKSPACE_ROOT}/apps/server`, 'src/schema.gql'),
      // sortSchema: true
      // playground: true,
      // plugins: [ApolloServerPluginLandingPageLocalDefault()]
    })
  ]
})
export class AppModule {
}
