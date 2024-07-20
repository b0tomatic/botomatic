/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { RootModule } from '@botomatic/schematics';
import { GraphQLSchemaHost } from '@nestjs/graphql';
import { printSchema } from 'graphql/index';
import { join } from 'path';
import fs from 'fs';
import * as process from 'node:process';


export async function generateSchema() {
  const app = await NestFactory.create(RootModule);
  await app.init(); // Ensure the application is fully initialized

  const { schema } = app.get(GraphQLSchemaHost);
  const schemaSDL = printSchema(schema);

  const schemaPath = join(process.cwd(), 'schema.graphql');
  fs.writeFileSync(schemaPath, schemaSDL);

  await app.close();

  return schemaPath;
}

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.enableCors();

  const port = process.env.PORT || 3000;
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: ${await app.getUrl()}`
  );
}

if (process.argv.includes('--generate-schema')) {
  generateSchema().then((schemaPath) => {
    console.log(`Schema generated at: ${schemaPath}`);
    process.exit(0);
  }).catch((e) => {
    console.error(e);
    process.exit(1);
  });
} else {
  bootstrap();
}

