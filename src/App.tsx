import Form from './components/Form';
import './App.css';
import AppLayout from './layout/AppLayout';
import { useState, useEffect } from 'react';
import type PersonEntity from './entities/Person';

function App() {
  const [personsList, setPersonsList] = useState<PersonEntity[]>([]);

  useEffect(() => {
    console.log(personsList);
  }, [personsList]);
  return (
    <AppLayout>
      <Form setList={setPersonsList} list={personsList} />
    </AppLayout>
  );
}

export default App;
