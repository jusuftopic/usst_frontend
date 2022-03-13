import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/api/firebase/model/admin.model';
import { AppConstants } from 'src/app/app.constants';
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

  //TODO write admin getByID
  admin: Admin | undefined;

  adminLog: boolean = false;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    if(localStorage.getItem(AppConstants.LOCAL_STORAGE_UID)){
      this.adminLog = true;      
    }
   this.courseService.getIndividualCourses().subscribe(courses => {
     if(courses){
       this.individualCourses = courses;
     }  })
  }

}
