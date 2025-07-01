import './List.css';
import PersonEntity from '../entities/Person';

function List() {
  const list: PersonEntity[] = JSON.parse(window.localStorage.getItem('persons') as string);
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
              <button className="edit-button" value={String(index)}>
                Editar
              </button>
              <button className="delete-button" value={String(index)}>
                Eliminar
              </button>
            </div>
          </article>
        ))}
    </section>
  );
}

export default List;
