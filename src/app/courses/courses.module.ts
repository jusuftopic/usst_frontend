import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoursesComponent} from './courses.component';
import {CoursesRoutingModule} from './courses-routing.module';
import {SharedModule} from '../shared/shared.module';
import { CoursesIndividualComponent } from './courses-individual/courses-individual.component';
import { CoursesGroupComponent } from './courses-group/courses-group.component';
import {CoursesDetailComponent} from './courses-detail/courses-detail.component';



@NgModule({
  declarations: [CoursesComponent, CoursesIndividualComponent, CoursesGroupComponent, CoursesDetailComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule
  ]
})
export class CoursesModule { }
