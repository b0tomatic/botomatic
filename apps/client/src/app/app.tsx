import './app.module.scss';
import { useQuery, gql } from '@apollo/client';

import NxWelcome from './nx-welcome';

export function App() {
  const { data } = useQuery(gql`

  `);

  return (
    <div>
      <NxWelcome title="client" />
    </div>
  );
}

export default App;
