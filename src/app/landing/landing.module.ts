import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingComponent} from './landing.component';
import {SharedModule} from '../shared/shared.module';
import {LandingRoutingModule} from './landing-routing.module';
import {HeaderComponent} from '../header/header.component';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
