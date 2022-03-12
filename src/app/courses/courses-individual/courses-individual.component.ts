import { Component, OnInit } from '@angular/core';
import {Course} from '../../../api/firebase/model/course.model';
import {CourseService} from '../../../api/firebase/service/course/course.service';

@Component({
  selector: 'app-courses-individual',
  templateUrl: './courses-individual.component.html',
  styleUrls: ['./courses-individual.component.css']
})
export class CoursesIndividualComponent implements OnInit {

  title: string = "Kursevi";
  individualCourses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
   this.courseService.getIndividualCourses().subscribe(courses => {
     if(courses){
       this.individualCourses = courses;
     }
   })
  }

}
