import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: ['../../schema.graphql', '../../libs/schematics/**/*.graphql'],
  errorsOnly: true,
  generates: {
    'src/__generated__/': {
      preset: 'client',
      documents: ['src/**/*.{ts,tsx}'],
      presetConfig: {
        gqlTagName: 'gql'
      }
    }
  },
  ignoreNoDocuments: true
};

export default config;
