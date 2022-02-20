import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoursesComponent} from './courses.component';
import {CoursesGroupComponent} from './courses-group/courses-group.component';
import {CoursesIndividualComponent} from './courses-individual/courses-individual.component';

const routes: Routes = [
  {path: '', component: CoursesComponent},
  {path: 'individual', component: CoursesIndividualComponent},
  {path: 'group', component: CoursesGroupComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
