import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {BlogMainComponent} from './blog-main.component';
import {BlogRoutingModule} from './blog-main-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BlogMainComponent],
  imports: [
    CommonModule,
    SharedModule,
    BlogRoutingModule,
    ReactiveFormsModule
  ]
})
export class BLogMainModule { }
