import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {GalleryMainComponent} from './gallery-main.component';
import {GalleryRoutingModule} from './gallery-main-routing.module';



@NgModule({
  declarations: [GalleryMainComponent],
  imports: [
    CommonModule,
    SharedModule,
    GalleryRoutingModule
  ]
})
export class GalleryMainModule { }
