import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoursesComponent} from './courses.component';
import {CoursesRoutingModule} from './courses-routing.module';
import {SharedModule} from '../shared/shared.module';
import { CoursesIndividualComponent } from './courses-individual/courses-individual.component';
import { CoursesGroupComponent } from './courses-group/courses-group.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [CoursesComponent,CoursesIndividualComponent, CoursesGroupComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
