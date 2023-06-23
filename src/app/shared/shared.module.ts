import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesPipe } from './pipes/pipes.pipe';
import { DummyDirectiveDirective } from './directives/dummy-directive.directive';
import { ComponentsModule } from './components/components.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    PipesPipe,
    DummyDirectiveDirective
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]

})
export class SharedModule { }
