import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogMainComponent} from './blog-main.component';


const routes: Routes = [
  {path: '', component: BlogMainComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
