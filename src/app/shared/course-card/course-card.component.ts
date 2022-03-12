import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../../api/firebase/model/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
