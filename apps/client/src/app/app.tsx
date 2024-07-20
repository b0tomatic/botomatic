import './app.module.scss';

import NxWelcome from './nx-welcome';
import { gql, useQuery } from '@apollo/client';
import { GetUserrs, User } from '../__generated__/graphql';

const USER_QUERY = gql`query getUser {
  user(id: 1) {
    ...part
  }
}

fragment part on User {
  id
  firstName
  exampleField
}`;

export function App() {
  const { data } = useQuery<GetUserrs>(USER_QUERY);

  return (
    <div>
      <NxWelcome title="client" />
    </div>
  );
}

export default App;
