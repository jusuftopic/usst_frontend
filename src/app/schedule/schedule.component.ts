import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../app.constants';
import { RouterHelperService } from '../../assets/service/router-helper.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  title: string = 'Raspored';

  constructor(private routerHelper: RouterHelperService) { }

  ngOnInit(): void {
  }

  public individualClick() {
    const individualPath = AppConstants.PATH_SCHEDULE + '/' + AppConstants.PATH_SCHEDULE_INDIVIDUAL;

    this.routerHelper.navigate(individualPath);
  }


  public groupClick() {
    const groupPath = AppConstants.PATH_SCHEDULE + '/' + AppConstants.PATH_SCHEDULE_GROUP;

    this.routerHelper.navigate(groupPath);
  }

}
