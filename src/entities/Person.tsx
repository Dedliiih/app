import type { Person } from '../interfaces/Person';
import type { Errors } from '../interfaces/Errors';

class PersonEntity implements Person {
  id: number;
  name: string;
  age: number;
  profession: string;
  description: string;
  birthday: string;

  constructor(id: number, name: string, age: number, profession: string, description: string, birthday: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.description = description;
    this.birthday = birthday;
  }

  public validate(): Errors {
    const errors: Errors = {
      name: '',
      age: '',
      profession: '',
      description: '',
      birthday: ''
    };

    if (!this.name.trim()) errors.name = 'El nombre es obligatorio.';
    if (isNaN(this.age) || this.age <= 0) errors.age = 'La edad debe ser mayor a cero.';
    if (!this.profession) errors.profession = 'La profesión es obligatoria.';
    if (!this.description.trim()) errors.description = 'La descripción es obligatoria.';
    if (!this.birthday) errors.birthday = 'La fecha de nacimiento es obligatoria.';

    return errors;
  }
}

export default PersonEntity;
