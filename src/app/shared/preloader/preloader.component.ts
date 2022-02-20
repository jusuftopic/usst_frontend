import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {

  toDisplay: boolean = false;

  constructor() { }

  ngOnInit(): void {

    if (!this.toDisplay){
      this.toDisplay = true;

      setTimeout(() => {this.toDisplay = false}, 500);
    }
  }

}
