import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesPipe } from './pipes/pipes.pipe';
import { DummyDirectiveDirective } from './directives/dummy-directive.directive';



@NgModule({
  declarations: [
    PipesPipe,
    DummyDirectiveDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
