import Form from './components/Form';
import './App.css';
import AppLayout from './layout/AppLayout';
import { useState, useEffect } from 'react';
import type PersonEntity from './entities/Person';
import List from './components/List';

function App() {
  const [personsList, setPersonsList] = useState<PersonEntity[]>([]);

  const getPersons = () => JSON.parse(window.localStorage.getItem('persons') as string);

  useEffect(() => {
    const persons = getPersons();
    if (!persons) return;
    setPersonsList(persons);
  }, []);

  return (
    <AppLayout>
      <Form setList={setPersonsList} list={personsList} />
      <List list={personsList} setList={setPersonsList} />
    </AppLayout>
  );
}

export default App;
