import { Component, OnInit } from '@angular/core';
import {RouterHelperService} from '../../assets/service/router-helper.service';
import {AppConstants} from '../app.constants';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private routerHelper: RouterHelperService) { }

  displayGalleryOverlay: boolean = true;

  ngOnInit(): void {
  }

  public onGroupCourseClick(){
    const groupPath = AppConstants.PATH_COURSES + '/' + AppConstants.PATH_COURSES_GROUP;

    this.routerHelper.navigate(groupPath, false);
  }


  public onIndividualCourseClick(){
    const individualPath =AppConstants.PATH_COURSES + '/' + AppConstants.PATH_COURSES_INDIVIDUAL;

    this.routerHelper.navigate(individualPath, false);
  }

}
