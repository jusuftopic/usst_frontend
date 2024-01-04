import { Component, OnInit } from '@angular/core';
import {RouterHelperService} from '../../assets/service/router-helper.service';
import {Router} from '@angular/router';
import {AppConstants} from '../app.constants';
import { BlogService } from '../../api/service/blog.service';
import { BlogDTO } from '../../api/model/blog.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.css']
})
export class BlogMainComponent implements OnInit {

  title: string = 'Blog';
  triggerLoader: boolean = false;
  searchForm = new FormGroup({
    search: new FormControl('', [])
  })

  blogs: BlogDTO[] = [];

  constructor(private router: Router,
              private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }

  public onSearch(): void {
    const searchText = this.searchForm.controls.search?.value?.toLowerCase();
    if (searchText) {
      this.resetTrigger();
      this.blogs = this.blogs.filter(
        blog => blog.title?.toLowerCase().startsWith(searchText)
        || blog.title?.toLowerCase() === searchText
        || blog.text?.toLowerCase().startsWith(searchText)
        || blog.text?.toLowerCase() === searchText);

      setTimeout(() => this.triggerLoader = !this.triggerLoader, 1)
    }
  }

  public onPageReload(){
    this.resetTrigger();
    this.router.navigate([AppConstants.PATH_BLOG])
    window.scrollTo(0,0)

    setTimeout(() => this.triggerLoader = !this.triggerLoader,1)
  }

  private resetTrigger(): void {
    if (this.triggerLoader) {
      this.triggerLoader = !this.triggerLoader
    }
    this.triggerLoader = true;
  }
}
