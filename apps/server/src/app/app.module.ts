import { makeExecutableSchema } from '@graphql-tools/schema';
import { Module } from '@nestjs/common';

import { GraphQLModule, GraphQLSchemaFactory } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { UsersModule } from './users/users.module';
import { join, dirname } from 'node:path';
import * as process from 'node:process';
import { UsersResolver } from './users/users.resolver';
import { printSchema } from 'graphql/utilities';

const autoSchemaFile = 'assets/schema.graphql';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile,
      // typePaths: ['libs/generated/graphql/**/*.graphql'],
      // definitions: {
      //   path: join(process.cwd(), 'libs/generated/graphql/src/lib/graphql.ts'),
      //   outputAs: 'interface'
      // },
      // sortSchema: true
      // schema: makeExecutableSchema({
      // typeDefs,
      //   resolvers
      // }),
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
