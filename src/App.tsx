import Form from './components/Form';
import './App.css';
import AppLayout from './layout/AppLayout';
import { useState, useEffect } from 'react';
import type PersonEntity from './entities/Person';
import List from './components/List';
import EditModal from './components/EditModal';
import { LocalStorage } from './services/localStorage';

function App() {
  const [personsList, setPersonsList] = useState<PersonEntity[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [person, setPerson] = useState<PersonEntity | null>(null);

  useEffect(() => {
    const persons = LocalStorage.getData();
    if (!persons) return;
    setPersonsList(persons);
  }, []);

  return (
    <AppLayout>
      {modal && <EditModal onEdit={setModal} person={person} list={personsList} setList={setPersonsList} />}
      <Form setList={setPersonsList} list={personsList} />
      <List list={personsList} setList={setPersonsList} onEdit={setModal} setPerson={setPerson} />
    </AppLayout>
  );
}

export default App;
