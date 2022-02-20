import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit, OnChanges {
  @Input()
  triggerLoaderAgain: boolean | undefined;

  toDisplay: boolean = false;

  constructor() { }

  ngOnInit(): void {

    if (this.triggerLoaderAgain){
      this.displayOnTrigger(this.triggerLoaderAgain);
    }

    this.displayLoader();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.triggerLoaderAgain){
      this.displayOnTrigger(this.triggerLoaderAgain);
    }

  }


  private displayOnTrigger(inputTrigger: boolean){
    if (inputTrigger){
      this.displayLoader();
    }
  }

  private displayLoader(){
    if (!this.toDisplay){
      this.toDisplay = true;
    }
      setTimeout(() => {this.toDisplay = false}, 500);

  }
}
