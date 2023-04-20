import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ScheduleGroupComponent } from './schedule-group/schedule-group.component';
import { ScheduleIndividualComponent } from './schedule-individual/schedule-individual.component';


@NgModule({
  declarations: [ScheduleComponent, ScheduleGroupComponent, ScheduleIndividualComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    SharedModule
  ]
})
export class ScheduleModule {

}