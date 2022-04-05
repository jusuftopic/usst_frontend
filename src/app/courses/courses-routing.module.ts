import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoursesComponent} from './courses.component';
import {CoursesGroupComponent} from './courses-group/courses-group.component';
import {CoursesIndividualComponent} from './courses-individual/courses-individual.component';
import {AppConstants} from '../app.constants';

const routes: Routes = [
  {path: '', component: CoursesComponent},
  {path: AppConstants.PATH_COURSES_INDIVIDUAL, component: CoursesIndividualComponent},
  {path: AppConstants.PATH_COURSES_GROUP, component: CoursesGroupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {
}
