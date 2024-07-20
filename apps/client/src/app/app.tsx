import './app.module.scss';

import NxWelcome from './nx-welcome';
import { gql, useQuery } from '@apollo/client';
import { User } from '@botomatic/models';

const USER_QUERY = gql`query getUser {
  user(id: 1) {
    ...part
  }
}

fragment part on User {
  id
  firstName
}`;

export function App() {
  const { data } = useQuery<User>(USER_QUERY);

  return (
    <div>
      <NxWelcome title="client" />
    </div>
  );
}

export default App;
