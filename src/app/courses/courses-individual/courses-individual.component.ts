import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-individual',
  templateUrl: './courses-individual.component.html',
  styleUrls: ['./courses-individual.component.css']
})
export class CoursesIndividualComponent implements OnInit {

  title: string = "Kursevi";

  constructor() { }

  ngOnInit(): void {
  }

}
