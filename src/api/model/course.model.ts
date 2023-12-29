import { Schedule } from './schedule.model';

export interface Course {
  id?: number;
  title?: string;
  type?: CourseType;
  freeTrail?: boolean;
  coaching?: boolean;
  targetGroup?: string;
  goal?: string;
  schedule?: Schedule
}

export enum CourseType {
  INDIVIDUAL,
  GROUP
}