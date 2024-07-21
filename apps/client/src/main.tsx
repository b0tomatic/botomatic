import { StrictMode } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  typeDefs: ['../../schema.graphql', '../../libs/schematics/**/*.graphql'],
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
