import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: ['schema.graphql', 'libs/schematics/**/*.graphql'],
  errorsOnly: true,
  generates: {
    'apps/client/src/__generated__/': {
      preset: 'client',
      documents: ['apps/client/src/**/*.{ts,tsx}'],
      presetConfig: {
        gqlTagName: 'gql'
      }
    }
  },
  ignoreNoDocuments: true
};

export default config;
