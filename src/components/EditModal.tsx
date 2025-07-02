import PersonEntity from '../entities/Person';
import { useState } from 'react';
import './EditModal.css';
import type { Errors } from '../interfaces/Errors';

interface EditProps {
  onEdit: React.Dispatch<React.SetStateAction<boolean>>;
  list: PersonEntity[];
  person: PersonEntity | null;
  setList: React.Dispatch<React.SetStateAction<PersonEntity[]>>;
}

function EditModal({ onEdit, person, list, setList }: EditProps) {
  const [errors, setErrors] = useState<Errors>({
    name: '',
    age: '',
    profession: '',
    description: '',
    birthday: ''
  });

  const handleClose = () => {
    onEdit((prev) => !prev);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const newPerson = new PersonEntity(Number(data.id), data.name as string, Number(data.age), data.profession as string, data.description as string, data.birthday as string);

    const errorsList = newPerson.validate();
    const isValid = Object.values(errorsList).every((value) => value === '');

    if (!isValid) {
      setErrors(errorsList);
      return;
    }

    list[person!.id] = newPerson;
    setList(list);
    window.localStorage.setItem('persons', JSON.stringify(list));
    onEdit((prev) => !prev);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <form className="modal-form" onSubmit={handleSubmit}>
          <fieldset className="inputs-container">
            <legend>Edita los datos de la persona</legend>

            <label htmlFor="edit-name">Nombre</label>
            {errors.name ? <p className="error-text">{errors.name}</p> : ''}
            <input type="text" name="name" id="edit-name" placeholder="Pedro Silva" defaultValue={person?.name} />

            <label htmlFor="edit-age">Edad</label>
            <input type="number" name="age" id="edit-age" placeholder="32" defaultValue={person?.age} />
            {errors.age ? <p className="error-text">{errors.age}</p> : ''}

            <label htmlFor="edit-profession">Profesión</label>
            <select name="profession" id="edit-profession" defaultValue={person?.profession}>
              <option value="">Elija una profesión</option>
              <option value="Profesor">Profesor</option>
              <option value="Programador">Programador</option>
              <option value="Carpintero">Carpintero</option>
              <option value="Electricista">Electricista</option>
              <option value="Dentista">Dentista</option>
              <option value="Minero">Minero</option>
            </select>
            {errors.profession ? <p className="error-text">{errors.profession}</p> : ''}

            <label htmlFor="edit-description">Descripción</label>
            <textarea name="description" id="edit-description" placeholder="Ingresa una descripción breve" defaultValue={person?.description}></textarea>
            {errors.description ? <p className="error-text">{errors.description}</p> : ''}

            <label htmlFor="edit-birthday">Año de nacimiento</label>
            <input type="date" name="birthday" id="edit-birthday" defaultValue={person?.birthday} />
            {errors.birthday ? <p className="error-text">{errors.birthday}</p> : ''}
          </fieldset>

          <div className="modal-buttons">
            <button type="submit">Guardar cambios</button>
            <button type="button" className="close-button" onClick={handleClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
