import React from 'react';

import { List } from './components/List';

const TEXT = {
  h1: 'Список задач',
};

function App() {
  return (
    <div className='App'>
      <h1>{TEXT.h1}</h1>
      <List />
    </div>
  );
}

export default App;
