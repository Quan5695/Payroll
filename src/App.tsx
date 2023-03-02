import React, { Suspense } from 'react';
import { RootRouter } from './routes';

const App = React.memo(() => {
  return (
    <Suspense >
      <RootRouter />
    </Suspense>
  );
});

export default App;
