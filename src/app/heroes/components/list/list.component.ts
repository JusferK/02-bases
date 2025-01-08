import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Hulk', 'Dr. Stranger', 'Captain America', 'Ironman', 'Thor', 'She Hulk'];
  public removedHeroe?: string;

  removeHeroe(value: string) {
    this.heroNames = this.heroNames.filter(hero => hero !== value);
    this.removedHeroe = value;
  }

  reset(): void {
    this.heroNames = ['Spiderman', 'Hulk', 'Dr. Stranger', 'Captain America', 'Ironman', 'Thor', 'She Hulk'];
    this.removedHeroe = undefined;
  }

}
