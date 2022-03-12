import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../../api/firebase/service/course/course.service';
import {Course} from '../../../api/firebase/model/course.model';


@Component({
  selector: 'app-courses-group',
  templateUrl: './courses-group.component.html',
  styleUrls: ['./courses-group.component.css']
})
export class CoursesGroupComponent implements OnInit{

  title: string = 'Kursevi';
  coursesGroup:Course[] = [];
  constructor(private courseService: CourseService) {

  }

  ngOnInit(): void {

  }

}
