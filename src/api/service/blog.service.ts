import { Injectable } from '@angular/core';
import { BlogDTO } from '../model/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: BlogDTO[] = [
    {
      id: 1,
      title: 'Dobrodošli!',
      text: 'Dobrodošli na blog! Uskoro vas očekuje mnogo zanimljivog sadržaja.',
      author: 'Igor Abdihodžić',
      date: new Date(2022, 1, 20, 0, 0, 0, 0)
    }
  ]


  constructor() { }

  public getBlogs(): BlogDTO[] {
    return this.blogs;
  }
}
