import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutMainComponent} from './about-main.component';
import {AboutRoutingModule} from './about-main-routing.module';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
   AboutMainComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutMainModule { }
