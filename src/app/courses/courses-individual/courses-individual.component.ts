import { Component, OnInit } from '@angular/core';
import { Course, CourseType } from '../../../api/model/course.model';
import { CourseService } from '../../../api/service/course.service';

@Component({
  selector: 'app-courses-individual',
  templateUrl: './courses-individual.component.html',
  styleUrls: ['./courses-individual.component.css']
})
export class CoursesIndividualComponent implements OnInit {

  courses: Course[] = [];

  title: string = 'Kursevi';

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses(CourseType.INDIVIDUAL);
  }

}
