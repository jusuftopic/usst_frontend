import { Component, OnInit } from '@angular/core';
import { CourseSchedule } from '../../../assets/model/course.schedule.model';
import { CourseService } from '../../../api/service/course.service';
import { CourseType } from '../../../api/model/course.model';

@Component({
  selector: 'app-schedule-individual',
  templateUrl: './schedule-individual.component.html',
  styleUrls: ['./schedule-individual.component.css']
})
export class ScheduleIndividualComponent implements OnInit {

  title: string = 'Raspored';

  schedules: CourseSchedule[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.schedules = this.courseService.getCoursesSchedule(CourseType.INDIVIDUAL);
  }

}
