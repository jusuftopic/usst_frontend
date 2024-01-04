import { Component, OnInit } from '@angular/core';
import { CourseDTO, CourseType } from '../../../api/model/course.model';
import { CourseService } from '../../../api/service/course.service';

@Component({
  selector: 'app-courses-individual',
  templateUrl: './courses-individual.component.html',
  styleUrls: ['./courses-individual.component.css']
})
export class CoursesIndividualComponent implements OnInit {

  courses: CourseDTO[] = [];

  title: string = 'Kursevi';

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.getCourses(CourseType.INDIVIDUAL)
      .subscribe(courses => this.courses = courses);
  }

}
