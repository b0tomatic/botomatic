import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: ['schema.graphql', 'libs/schematics/**/*.graphql'],
  errorsOnly: true,
  watch: true,
  generates: {
    'apps/client/src/__generated__/': {
      preset: 'client',
      documents: ['apps/client/**/*.ts', 'apps/client/**/*.tsx'],
      presetConfig: {
        gqlTagName: 'gql'
      }
    },
    'apps/server/src/': {
      preset: 'graphql-modules-preset',
      presetConfig: {
        baseTypesPath: 'generated-types/graphql.ts',
        filename: 'generated-types/module-types.ts'
      },
      plugins: [
        {
          add: {
            content: '/* eslint-disable */'
          }
        },
        'typescript',
        'typescript-resolvers'
      ]
    }
  },
  ignoreNoDocuments: true

// schema: '../../schema.graphql',
// documents: ['./src/**/*.tsx', './src/**/*.ts'],
// // TODO: generate files for graphql files like mutations, queries?
};

export default config;
