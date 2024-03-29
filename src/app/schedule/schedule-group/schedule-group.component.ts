import { Component, OnInit } from '@angular/core';
import { CourseSchedule } from '../../../assets/model/course.schedule.model';
import { CourseService } from '../../../api/service/course.service';
import { CourseType } from '../../../api/model/course.model';

@Component({
  selector: 'app-schedule-group',
  templateUrl: './schedule-group.component.html',
  styleUrls: ['./schedule-group.component.css']
})
export class ScheduleGroupComponent implements OnInit {

  title: string = 'Raspored';

  schedules: CourseSchedule[] = [];

   constructor(private courseService: CourseService) { }

  ngOnInit(): void {
     this.schedules = this.courseService.getCoursesSchedule(CourseType.GROUP);
  }

}
