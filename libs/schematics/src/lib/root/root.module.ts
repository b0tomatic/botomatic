import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { PostsModule, User, UsersModule } from '../users';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'node:path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3', // process.env.DATABASE_TYPE as 'better-sqlite3' | 'mysql',
      // host: process.env.DATABASE_HOST,
      // port: process.env.DATABASE_PORT as unknown as number,
      // username: process.env.DATABASE_USERNAME,
      database: './db.sqlite3', // process.env.DATABASE_NAME,
      // password: 'root',

      entities: [
        join(__dirname, '../../', '**/*.entity{.ts,.js}')
      ],
      autoLoadEntities: true,
      synchronize: true
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true, // process.env.NODE_ENV === 'production' || join(__dirname, 'assets/schema.graphql')
      sortSchema: true,
      introspection: process.env.NODE_ENV !== 'production'

      // playground: true,
      // plugins: [ApolloServerPluginLandingPageLocalDefault()]
    }),
    UsersModule,
    PostsModule
  ]
})
export class RootModule {
  constructor(private dataSource: DataSource) {

  }
}
