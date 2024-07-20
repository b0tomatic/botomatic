import { CodegenConfig } from '@graphql-codegen/cli';

const autoSchemaFile = 'libs/generated/graphql/src/assets/schema.graphql';
const config: CodegenConfig = {
  schema: autoSchemaFile, // "http://localhost:3000/graphql",
  documents: ['apps/client/src/**/*.tsx'],
  generates: {
    './apps/client/src/__generated__/': {
      preset: 'client',
      // presetConfig: {
      //   gqlTagName: 'gql'
      // }
    }
  },
  // ignoreNoDocuments: true
};

export default config;
