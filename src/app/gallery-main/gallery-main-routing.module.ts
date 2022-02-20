import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GalleryMainComponent} from './gallery-main.component';


const routes: Routes = [
  {path: '', component: GalleryMainComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
