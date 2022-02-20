import { Component, OnInit } from '@angular/core';
import {RouterHelperService} from '../../assets/service/router-helper.service';

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
    const groupPath = 'courses/group';

    this.routerHelper.navigate(groupPath, false);
  }


  public onIndividualCourseClick(){
    const individualPath = 'courses/individual';

    this.routerHelper.navigate(individualPath, false);
  }

}
