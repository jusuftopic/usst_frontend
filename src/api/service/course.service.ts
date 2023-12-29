import { Injectable } from '@angular/core';
import { Course, CourseType } from '../model/course.model';
import { CourseSchedule } from '../../assets/model/course.schedule.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  individualCourses: Course[] = [
    {
      id: 4,
      title: 'Sport performanse',
      freeTrail: true,
      coaching: true,
      targetGroup: 'Amateri i profesionalci',
      goal: 'Poboljšanje fizičke spreme',
      schedule: {
        days: ['utorak', 'četvrtak'], time: '19-20h'
      }
    }
  ];

  groupCourses: Course[] = [
    {
      id: 1,
      title: 'Basic rekreativci M/Ž',
      freeTrail: true,
      coaching: true,
      targetGroup: 'Rekreativci',
      goal: 'Poboljšanje pokretljivosti',
      schedule: {
        days: ['ponedeljak', 'srijeda', 'petak'], time: '17-18h'
      }
    },
    {
      id: 2,
      title: 'Rekreativci M/Ž',
      freeTrail: true,
      coaching: true,
      targetGroup: 'Napredni vježbači',
      goal: 'Poboljšanje fizičke spreme',
      schedule: {
        days: ['ponedeljak', 'srijeda', 'petak'], time: '18-19h'
      }
    },
    {
      id: 3,
      title: 'Kids GYM',
      freeTrail: true,
      coaching: true,
      targetGroup: 'Djeca 3-5 godina',
      goal: 'Osnovna motorika',
      schedule: {
        days: ['utorak', 'četvrtak'], time: '18-19h'
      }
    }
  ];


  public getCourses(type: CourseType): Course[] {
    if (type === CourseType.INDIVIDUAL) {
      return this.individualCourses;
    }
    else {
      return this.groupCourses;
    }
  }

  public getCoursesSchedule(type: CourseType): CourseSchedule[] {
    const courses = type === CourseType.INDIVIDUAL ? this.individualCourses : this.groupCourses;

    return courses.map(course => {
      return {
        title: course.title,
        days: course.schedule?.days,
        time: course.schedule?.time
      }
    });
  }
}
