import Form from './components/Form';
import './App.css';
import AppLayout from './layout/AppLayout';
import { useState, useEffect } from 'react';
import type PersonEntity from './entities/Person';
import List from './components/List';

function App() {
  const [personsList, setPersonsList] = useState<PersonEntity[]>([]);

  useEffect(() => {}, []);
  return (
    <AppLayout>
      <Form setList={setPersonsList} list={personsList} />
      <List />
    </AppLayout>
  );
}

export default App;
