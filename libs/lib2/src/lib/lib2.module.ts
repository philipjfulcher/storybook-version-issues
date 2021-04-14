import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp2Component } from './comp2/comp2.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Comp2Component],
  exports: [Comp2Component]
})
export class Lib2Module {}
