import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { HeroComponent } from './components/hero/hero.component';



@NgModule({
  declarations: [
    ListComponent,
    HeroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    HeroComponent
  ]
})
export class HeroesModule { }
