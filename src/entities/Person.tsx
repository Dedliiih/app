import type { Person } from '../interfaces/Person';

class PersonEntity implements Person {
  name: string;
  age: number;
  profession: string;
  description: string;
  birthday: string;

  constructor(name: string, age: number, profession: string, description: string, birthday: string) {
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.description = description;
    this.birthday = birthday;
  }
}

export default PersonEntity;
