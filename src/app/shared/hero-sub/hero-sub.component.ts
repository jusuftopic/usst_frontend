import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero-sub',
  templateUrl: './hero-sub.component.html',
  styleUrls: ['./hero-sub.component.css']
})
export class HeroSubComponent implements OnInit {

  @Input()
  title: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
