import {Component, OnInit} from '@angular/core';
import {RouterHelperService} from '../../assets/service/router-helper.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title: string = 'Kursevi'
  triggerLoader: boolean = false;

  coursePath = 'courses/';

  constructor(private routerHelper: RouterHelperService) {
  }

  ngOnInit(): void {
  }

  public individualClick() {
    const individualPath = this.coursePath + 'individual';
    this.routerHelper.navigate(individualPath, this.triggerLoader);
  }


  public groupClick() {
    const groupPath = this.coursePath + 'group';
    this.routerHelper.navigate(groupPath, this.triggerLoader);
  }

}
