import PersonEntity from '../entities/Person';
import './Form.css';
import useErrors from '../hooks/useErrors';
import { LocalStorage } from '../services/localStorage';

interface FormProps {
  list: PersonEntity[];
  setList: React.Dispatch<React.SetStateAction<PersonEntity[]>>;
}

function Form({ setList, list }: FormProps) {
  const { errors, validateData } = useErrors();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const newPerson = new PersonEntity(Number(data.id), data.name as string, Number(data.age), data.profession as string, data.description as string, data.birthday as string);

    if (!validateData(newPerson)) return;

    const updatedList = [...list, newPerson];
    setList(updatedList);
    LocalStorage.setData(updatedList);
  };

  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <fieldset className="inputs-container">
        <legend>Ingresa los datos para almacenar una nueva persona.</legend>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" placeholder="Pedro Silva" />
        {errors.name ? <p className="error-text">{errors.name}</p> : ''}

        <label htmlFor="age">Edad</label>
        <input type="number" name="age" placeholder="32" />
        {errors.age ? <p className="error-text">{errors.age}</p> : ''}

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
        {errors.profession ? <p className="error-text">{errors.profession}</p> : ''}

        <textarea name="description" placeholder="Ingresa una descripción breve"></textarea>
        {errors.description ? <p className="error-text">{errors.description}</p> : ''}

        <label htmlFor="birthday">Año de nacimiento</label>
        <input type="date" name="birthday" />
        {errors.birthday ? <p className="error-text">{errors.birthday}</p> : ''}
      </fieldset>
      <button type="submit">Guardar</button>
    </form>
  );
}

export default Form;
