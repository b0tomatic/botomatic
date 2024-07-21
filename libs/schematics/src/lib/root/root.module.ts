import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { User, UsersModule } from '../users';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'node:path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      // password: 'root',
      database: 'test',

      // type: 'better-sqlite3',
      // database: './db.sqlite3',
      // entities: [User],
      entities: [
        join(__dirname, '../../', '**/*.entity{.ts,.js}')
      ],
      autoLoadEntities: true,
      synchronize: true
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true, // process.env.NODE_ENV === 'production' || join(__dirname, 'assets/schema.graphql')
      sortSchema: true

      // playground: true,
      // plugins: [ApolloServerPluginLandingPageLocalDefault()]
    }),
    UsersModule
  ]
})
export class RootModule {
  constructor(private dataSource: DataSource) {

  }
}
