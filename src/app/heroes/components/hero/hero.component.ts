import { Component } from '@angular/core';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizeName(): string {
    return 'Hola Mundo!';
  }

  getHeroDescription(): string {
    return `name: ${this.name} - age: ${this.age}`;
  }

  changeHero(): void {
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.age = 23;
  }

  reset(): void {
    this.name = 'ironman';
    this.age = 45;
  }

}
