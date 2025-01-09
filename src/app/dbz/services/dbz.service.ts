import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { UUIDTypes, v4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  private characters: Character[] = [
    { id: v4(), name: 'Krill', power: 500 },
    { id: v4(), name: 'Goku', power: 10000 }
  ];

  constructor() {}

  getCharacters(): Character[] {
    return this.characters;
  }

  setCharacters(characters: Character[]): void {
    this.characters = characters;
  }

  addNewCharacter(characters: Character): void {
    this.characters.push(characters);
  }

  removeCharacter({ id }: Character): void {
    this.characters = this.characters.filter(char => char.id !== id);
  }

}
