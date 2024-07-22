import { gql } from '@apollo/client';

export const GET_USERS_WITH_EXAMPLE_FIELD = gql`
  query GetUserWithExampleField {
    users {
      id
      firstName
      lastName
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id: Int!) {
    user(id: $id) {
      id
      firstName
      lastName
    }
  }
`;
