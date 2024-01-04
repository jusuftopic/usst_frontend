import { Injectable } from '@angular/core';
import { CourseDTO, CourseType } from '../model/course.model';
import { CourseSchedule } from '../../assets/model/course.schedule.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  restUrlBase = environment.restUrlBase;

  constructor(private http: HttpClient) {
  }


  public getCourses(type: CourseType): Observable<CourseDTO[]> {
    return this.http.get<CourseDTO[]>(this.restUrlBase + '/courses/' + type);
  }

  public getCoursesSchedule(type: CourseType): Observable<CourseSchedule[]> {
    return this.http.get<CourseDTO[]>(this.restUrlBase + '/schedule/' + type);
  }
}
