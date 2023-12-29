import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-training-category',
  templateUrl: './training-category.component.html',
  styleUrls: ['./training-category.component.css']
})
export class TrainingCategoryComponent {

  @Output()
  individualCourseEmitter = new EventEmitter<void>();

  @Output()
  groupCourseEmitter = new EventEmitter<void>();

}
