import './app.module.scss';

import NxWelcome from './nx-welcome';
import { gql, useQuery } from '@apollo/client';
import { GetUserQuery, GetUserWithExampleFieldQuery, User } from '../__generated__/graphql';
import { Fragment } from 'react';

const GET_USERS_WITH_EXAMPLE_FIELD = gql`
  query GetUserWithExampleField {
    users {
      firstName
      lastName
    }
  }
`;

const GET_USER = gql`
  query GetUser($id: Int!) {
    user(id: $id) {
      id
      firstName
      lastName
    }
  }
`;

export function App() {
  const a = useQuery<T>();
  const { data: withExampleField } = useQuery<GetUserWithExampleFieldQuery>(GET_USERS_WITH_EXAMPLE_FIELD);
  const { data: data } = useQuery<GetUserQuery>(GET_USER, {
    variables: { id: 1 }
  });

  return <>
    <div style={{
      display: 'flex', flexDirection: 'row', gap: '5px'
    }}>
      {withExampleField?.users.map(({ firstName, lastName }, i) =>
        <p>{exampleField}</p>
      )}
    </div>
    {data?.user &&
      <div style={{ display: 'flex', gap: '5px' }}>
        <p>{data.user.id}</p>
        <p>{data.user.firstName}</p>
        <p>{data.user.lastName}</p>
      </div>
    }
  </>;
}

export default App;
