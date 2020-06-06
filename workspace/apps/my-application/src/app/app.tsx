import { Message } from '@workspace/api-interfaces';
import React, { useEffect, useState } from 'react';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: 'Test1' });

  useEffect(() => {
    fetch('/api')
      .then(r => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to my-application!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"
        />
      </div>
      <div>{m.message}</div>
    </>
  );
};

export default App;
