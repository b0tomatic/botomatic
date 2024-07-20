/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { GraphQLSchemaBuilderModule, GraphQLSchemaFactory, GraphQLSchemaHost } from '@nestjs/graphql';
import { join } from 'path';
import fs from 'fs';
import { printSchema } from 'graphql/index';

async function generateSchema() {
  const app = await NestFactory.create(AppModule);
  await app.init(); // Ensure the application is fully initialized

  const { schema } = app.get(GraphQLSchemaHost);
  const schemaSDL = printSchema(schema);

  const schemaPath = join(process.cwd(), 'schema.graphql');
  fs.writeFileSync(schemaPath, schemaSDL);

  await app.close();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const port = process.env.PORT || 3000;
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: ${await app.getUrl()}`
  );
}

bootstrap()

// generateSchema()
