import { Component, OnInit } from '@angular/core';
import {RouterHelperService} from '../../assets/service/router-helper.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.css']
})
export class BlogMainComponent implements OnInit {

  title: string = 'Blog';
  triggerLoader: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onPageReload(){
    if (this.triggerLoader){this.triggerLoader = !this.triggerLoader}
    this.triggerLoader = true;
    this.router.navigate(['blog'])
    window.scrollTo(0,0)

    setTimeout(() => this.triggerLoader = !this.triggerLoader,1)
  }

}
