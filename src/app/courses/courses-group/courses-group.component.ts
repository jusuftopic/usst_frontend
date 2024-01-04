import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../api/service/course.service';
import { CourseDTO, CourseType } from '../../../api/model/course.model';

@Component({
  selector: 'app-courses-group',
  templateUrl: './courses-group.component.html',
  styleUrls: ['./courses-group.component.css']
})
export class CoursesGroupComponent implements OnInit{

  courses: CourseDTO[] = [];

  title: string = 'Kursevi';
  path: string = 'group';

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.courseService.getCourses(CourseType.GROUP)
      .subscribe(courses => this.courses = courses);
  }



}
