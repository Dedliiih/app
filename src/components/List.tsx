import './List.css';
import PersonEntity from '../entities/Person';
import type React from 'react';
import { LocalStorage } from '../services/localStorage';

interface ListProps {
  list: PersonEntity[];
  setList: React.Dispatch<React.SetStateAction<PersonEntity[]>>;
  onEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setPerson: React.Dispatch<React.SetStateAction<PersonEntity | null>>;
}

function List({ list, setList, onEdit, setPerson }: ListProps) {
  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newList = list.filter((_, index) => index !== Number(event.currentTarget.value));
    setList(newList);
    LocalStorage.setData(newList);
  };

  const handleEdit = (person: PersonEntity, index: number) => {
    person.id = index;
    onEdit((prev) => !prev);
    setPerson(person);
  };

  return (
    <section className="list-container">
      {list &&
        list.map((person: PersonEntity, index) => (
          <article className="person-container" key={String(index)}>
            <p className="name-container">
              {person.name}
              <span>{person.age} años</span>
            </p>
            <p>{person.profession}</p>
            <p>{person.description}</p>
            <p>Nacido el {person.birthday}</p>
            <div className="button-container">
              <button className="edit-button" onClick={() => handleEdit(person, index)}>
                Editar
              </button>
              <button className="delete-button" value={String(index)} onClick={handleDelete}>
                Eliminar
              </button>
            </div>
          </article>
        ))}
    </section>
  );
}

export default List;
