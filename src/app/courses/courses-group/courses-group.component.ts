import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../../api/firebase/service/course/course.service';
import {Course} from '../../../api/firebase/model/course.model';
import { AppCheck } from '@angular/fire/app-check';
import { AppConstants } from 'src/app/app.constants';


@Component({
  selector: 'app-courses-group',
  templateUrl: './courses-group.component.html',
  styleUrls: ['./courses-group.component.css']
})
export class CoursesGroupComponent implements OnInit{

  title: string = 'Kursevi';
  coursesGroup:Course[] = [];
  adminLog: boolean = false;

  constructor(private courseService: CourseService) {

  }

  ngOnInit(): void {
    if(localStorage.getItem(AppConstants.LOCAL_STORAGE_UID)){
      this.adminLog = true;
    }
    this.courseService.getGroupCourses().subscribe(courses => {
      if (courses) {
        this.coursesGroup = courses;

        console.log(this.coursesGroup)
      }
    })
  }

}
