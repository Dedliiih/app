import type { Person } from '../interfaces/Person';
import type { Errors } from '../interfaces/Errors';
import { ValidationMessages as VM } from '../enums/errors';

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

  private validateName(errors: Errors): void {
    if (!this.name.trim()) errors.name = VM.NAME_REQUIRED;
    else if (this.name.trim().length < 3) errors.name = VM.NAME_TOO_SHORT;
  }

  private validateAge(errors: Errors): void {
    if (isNaN(this.age) || this.age <= 0) errors.age = VM.AGE_INVALID;
    else if (this.age > 120) errors.age = VM.AGE_TOO_HIGH;
  }

  private validateProfession(errors: Errors): void {
    if (!this.profession) errors.profession = VM.PROFESSION_REQUIRED;
  }

  private validateDescription(errors: Errors): void {
    if (!this.description.trim()) errors.description = VM.DESCRIPTION_REQUIRED;
    else if (this.description.trim().length < 10) errors.description = VM.DESCRIPTION_TOO_SHORT;
    else if (this.description.trim().length > 300) errors.description = VM.DESCRIPTION_TOO_LONG;
  }

  private validateBirthday(errors: Errors): void {
    if (!this.birthday) {
      errors.birthday = VM.BIRTHDAY_REQUIRED;
    } else {
      const date = new Date(this.birthday);
      const now = new Date();

      if (isNaN(date.getTime())) {
        errors.birthday = VM.BIRTHDAY_INVALID;
      } else if (date > now) {
        errors.birthday = VM.BIRTHDAY_IN_FUTURE;
      }
    }
  }

  public validate(): Errors {
    const errors: Errors = {
      name: '',
      age: '',
      profession: '',
      description: '',
      birthday: ''
    };

    this.validateName(errors);
    this.validateAge(errors);
    this.validateProfession(errors);
    this.validateDescription(errors);
    this.validateBirthday(errors);

    return errors;
  }
}

export default PersonEntity;
