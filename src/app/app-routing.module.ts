import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppConstants} from './app.constants';

const routes: Routes = [
  {path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)},
  {path: AppConstants.PATH_ABOUT, loadChildren: () => import('./about-main/about-main.module').then(m => m.AboutMainModule)},
  {path: AppConstants.PATH_COURSES, loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)},
  {path: AppConstants.PATH_SCHEDULE, loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule)},
  {path: AppConstants.PATH_GALLERY, loadChildren: () => import('./gallery-main/gallery-main.module').then(m => m.GalleryMainModule)},
  {path: AppConstants.PATH_BLOG, loadChildren: () => import('./blog-main/blog-main.module').then(m => m.BLogMainModule)},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
