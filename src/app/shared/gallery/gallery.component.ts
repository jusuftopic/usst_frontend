import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppConstants} from '../../app.constants';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input()
  displayOverlay: boolean | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onGalleryClick(){
    this.router.navigate([AppConstants.PATH_GALLERY])
  }

}
