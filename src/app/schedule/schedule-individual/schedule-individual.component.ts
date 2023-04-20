import { Component, OnInit } from '@angular/core';
import { Schedule } from '../../../api/model/schedule.model';

@Component({
  selector: 'app-schedule-individual',
  templateUrl: './schedule-individual.component.html',
  styleUrls: ['./schedule-individual.component.css']
})
export class ScheduleIndividualComponent implements OnInit {

  title: string = 'Raspored';

  schedulesIndividual: Schedule[] = [
    {title: 'Sport performanse', days: ['utorak', 'četvrtak'], time: '19-20h'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
