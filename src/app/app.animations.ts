import {animate, style, transition, trigger} from '@angular/animations';

export const fadeSlideInOut =     trigger('fadeSlideInOut', [
  transition(':enter', [
    style({opacity: 0, transform: 'translateY(10px)'}),
    animate('1000ms', style({opacity: 1, transform: 'translateY(0)'}))
  ])
])
