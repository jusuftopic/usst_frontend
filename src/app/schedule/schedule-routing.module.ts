import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ScheduleComponent } from './schedule.component';
import { AppConstants } from '../app.constants';
import { ScheduleIndividualComponent } from './schedule-individual/schedule-individual.component';
import { ScheduleGroupComponent } from './schedule-group/schedule-group.component';

const routes: Routes = [
  {path: '', component: ScheduleComponent},
  {path: AppConstants.PATH_SCHEDULE_INDIVIDUAL, component: ScheduleIndividualComponent},
  {path: AppConstants.PATH_SCHEDULE_GROUP, component: ScheduleGroupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }