import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { UsersModule } from '../users/users.module';
import { join, dirname } from 'node:path';

const __dirname = dirname(__filename);

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // TODO: autoSchemaFile - generate in the right place
      // autoSchemaFile: true,
      autoSchemaFile: join(__dirname, 'src/schema.gql'),
      sortSchema: true
      // playground: true,
      // plugins: [ApolloServerPluginLandingPageLocalDefault()]
    })
  ]
})
export class AppModule {
}
