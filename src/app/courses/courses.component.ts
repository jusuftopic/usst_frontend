import {Component, OnInit} from '@angular/core';
import {RouterHelperService} from '../../assets/service/router-helper.service';
import {AppConstants} from '../app.constants';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title: string = 'Kursevi'

  constructor(private routerHelper: RouterHelperService) {
  }

  ngOnInit(): void {
  }

  public individualClick() {
    const individualPath = AppConstants.PATH_COURSES + '/' + AppConstants.PATH_COURSES_INDIVIDUAL;
    this.routerHelper.navigate(individualPath);
  }


  public groupClick() {
    const groupPath = AppConstants.PATH_COURSES + '/' + AppConstants.PATH_COURSES_GROUP;
    this.routerHelper.navigate(groupPath);
  }

}
