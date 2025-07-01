import PersonEntity from '../entities/Person';
import './Form.css';

interface FormProps {
  list: PersonEntity[];
  setList: React.Dispatch<React.SetStateAction<PersonEntity[]>>;
}

function Form({ setList, list }: FormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const newPerson = new PersonEntity(data.name as string, Number(data.age), data.profession as string, data.description as string, data.birthday as string);

    const updatedList = [...list, newPerson];
    setList(updatedList);
    window.localStorage.setItem('persons', JSON.stringify(updatedList));
  };

  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <fieldset className="inputs-container">
        <legend>Ingresa los datos para almacenar una nueva persona.</legend>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" placeholder="Pedro Silva" />
        <label htmlFor="age">Edad</label>
        <input type="number" name="age" placeholder="32" />
        <label htmlFor="select"></label>
        <select name="profession">
          <option value="">Elija una profesión</option>
          <option value="Profesor">Profesor</option>
          <option value="Programador">Programador</option>
          <option value="Carpintero">Carpintero</option>
          <option value="Electricista">Electricista</option>
          <option value="Dentista">Dentista</option>
          <option value="Minero">Minero</option>
        </select>
        <textarea name="description" placeholder="Ingresa una descripción breve"></textarea>
        <label htmlFor="birthday">Año de nacimiento</label>
        <input type="date" name="birthday" />
      </fieldset>
      <button type="submit">Guardar</button>
    </form>
  );
}

export default Form;
