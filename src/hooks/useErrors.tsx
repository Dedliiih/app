import type PersonEntity from '../entities/Person';
import type { Errors } from '../interfaces/Errors';
import { useState } from 'react';

function useErrors() {
  const [errors, setErrors] = useState<Errors>({
    name: '',
    age: '',
    profession: '',
    description: '',
    birthday: ''
  });

  function validateData(newPerson: PersonEntity) {
    const errorsList = newPerson.validate();
    const isValid = Object.values(errorsList).every((value) => value === '');

    if (!isValid) {
      setErrors(errorsList);
      return isValid;
    }

    return isValid;
  }

  return { errors, setErrors, validateData };
}

export default useErrors;
