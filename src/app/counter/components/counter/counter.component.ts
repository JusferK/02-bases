import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})

export class CounterComponent {

  public counter = 0;

  changeValue(value: number, condition: string): void {
    condition === 'sumar' ? this.counter += value : this.counter -= value;
  }

  reset(): void {
    this.counter = 10;
  }

}
