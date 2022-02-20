import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-main',
  templateUrl: './gallery-main.component.html',
  styleUrls: ['./gallery-main.component.css']
})
export class GalleryMainComponent implements OnInit {

  title: string = 'Galerija';

  dislayOverlay: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
