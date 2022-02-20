import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-training-category',
  templateUrl: './training-category.component.html',
  styleUrls: ['./training-category.component.css']
})
export class TrainingCategoryComponent implements OnInit {

  @Output()
  individualCourseEmitter: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  groupCourseEmitter: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public onIndividualCourseClick(){
    this.individualCourseEmitter.emit();
  }

  public onGroupCourseClick(){
    this.groupCourseEmitter.emit();
  }

}
