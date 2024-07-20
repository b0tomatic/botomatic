import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: "http://localhost:3000/graphql",
  documents: ['./src/**/*.tsx'],
  errorsOnly: true,
  generates: {
    './src/__generated__/': {
      preset: 'client',
      // presetConfig: {
      //   gqlTagName: 'gql'
      // }
    }
  },
  // ignoreNoDocuments: true
};

export default config;
