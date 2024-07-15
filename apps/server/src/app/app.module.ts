import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // TODO: autoSchemaFile - generate in the right place
      autoSchemaFile: true,
      // playground: true,
      // plugins: [ApolloServerPluginLandingPageLocalDefault()]
    })
  ]
})
export class AppModule {
}
