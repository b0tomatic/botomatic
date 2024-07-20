import './app.module.scss';

import NxWelcome from './nx-welcome';
import { gql, useQuery } from '@apollo/client';
import { User } from '@botomatic/models';
import { graphql, useFragment } from '../__generated__';

const USER_QUERY = graphql(`query getUser {
  user(id: 1) {
    ...part
  }
}

fragment part on User {
  id
  firstName
}`);

export function App() {
  const { data } = useQuery<User>(USER_QUERY);

  console.log(data);

  return (
    <div>
      <NxWelcome title="client" />
    </div>
  );
}

export default App;
