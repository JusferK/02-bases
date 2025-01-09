import { Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DbzService } from '../../services/dbz.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {

  public newCharacterForm: FormGroup;
  private _fb = inject(FormBuilder);
  private _characterService = inject(DbzService);

  constructor() {
    this.newCharacterForm = this._fb.group({
      name: ['', [Validators.required]],
      power: ['', [Validators.required]],
      id: ['']
    });
  }

  onSubmit(): void {
    if(this.newCharacterForm.invalid) return;
    this.newCharacterForm.get('id')?.patchValue(v4());
    this._characterService.addNewCharacter(this.newCharacterForm.value);
    this.newCharacterForm.reset();
  }

}
