import { ScheduleDTO } from './schedule.model';

export interface CourseDTO {
  id?: number;
  title?: string;
  type?: CourseType;
  freeTrail?: boolean;
  coaching?: boolean;
  targetGroup?: string;
  goal?: string;
  schedule?: ScheduleDTO
}

export interface CourseMinimalDTO {

  title?: string;
  days?: string[];
  time?: string;
}

export enum CourseType {
  INDIVIDUAL,
  GROUP
}