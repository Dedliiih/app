import type PersonEntity from '../entities/Person';

export class LocalStorage {
  static getData(): PersonEntity[] {
    return JSON.parse(window.localStorage.getItem('persons') as string);
  }

  static setData(personsList: PersonEntity[]): void {
    window.localStorage.setItem('persons', JSON.stringify(personsList));
  }
}
