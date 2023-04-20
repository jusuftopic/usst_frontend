import { Component, OnInit } from '@angular/core';
import { Schedule } from '../../../api/model/schedule.model';

@Component({
  selector: 'app-schedule-group',
  templateUrl: './schedule-group.component.html',
  styleUrls: ['./schedule-group.component.css']
})
export class ScheduleGroupComponent implements OnInit {

  title: string = 'Raspored';

  schedulesGroup: Schedule[] = [
    {title: 'Basic rekreativci M/Ž', days: ['ponedeljak', 'srijeda', 'petak'], time: '17-18h'},
    {title: 'Rekreativci M/Ž', days: ['ponedeljak', 'srijeda', 'petak'], time: '18-19h'},
    {title: 'Kids GYM', days: ['utorak', 'četvrtak'], time: '18-19h'}
  ];

   constructor() { }

  ngOnInit(): void {
  }

}
