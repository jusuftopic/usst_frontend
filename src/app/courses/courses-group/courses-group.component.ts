import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-group',
  templateUrl: './courses-group.component.html',
  styleUrls: ['./courses-group.component.css']
})
export class CoursesGroupComponent implements OnInit {

  title: string = 'Kursevi';

  constructor() { }

  ngOnInit(): void {
  }

}
