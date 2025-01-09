import { Component, inject, Input, input, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  private _characterService = inject(DbzService);

  removeCharacter(character: Character) {
    this._characterService.removeCharacter(character);
  };

  characterList(): Character[] {
    return this._characterService.getCharacters();
  }

}
