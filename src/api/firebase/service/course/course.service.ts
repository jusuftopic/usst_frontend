import {Injectable} from '@angular/core';
import {AppConstants} from '../../../../app/app.constants';
import {Course} from '../../model/course.model';
import {map, Observable} from 'rxjs';
import {AngularFireDatabase, AngularFireList, SnapshotAction} from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private path: string = AppConstants.FIREBASE_COURSES;

  private childType = AppConstants.COURSE_CHILD_TYPE;
  private individualCourse = AppConstants.COURSE_INDIVIDUAL;
  private groupCourse = AppConstants.COURSE_GROUP;

  constructor(private db: AngularFireDatabase) {
  }

  public getAll(): Observable<SnapshotAction<Course>[]> {
    return this.db.list<Course>(this.path).snapshotChanges();
  }

  public getIndividualCourses(): Observable<Course[]> {
    return this.makeCourseTypeQuery(this.childType, this.individualCourse).snapshotChanges()
      .pipe(map(res => {
        return res.map(course => {
          const individualCourse = course.payload.toJSON() as Course;
          individualCourse.id = course.key as string;

          return individualCourse;
        })
      }));
  }

  public getGroupCourses(): Observable<Course[]> {
    return this.makeCourseTypeQuery(this.childType,this.groupCourse).snapshotChanges()
      .pipe(map(res => {
        return res.map(course => {
          const groupCourse = course.payload.toJSON() as Course;
          groupCourse.id = course.key as string;

          return groupCourse;
        })
      }));
  }

  private makeCourseTypeQuery(orderByChild: string, value: string): AngularFireList<Course>{
    return this.db.list<Course>(this.path,ref => ref.orderByChild(orderByChild).equalTo(value));
  }
}
