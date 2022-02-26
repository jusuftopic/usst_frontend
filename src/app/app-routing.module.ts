import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)},
  {path: 'about', loadChildren: () => import('./about-main/about-main.module').then(m => m.AboutMainModule)},
  {path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)},
  {path: 'gallery', loadChildren: () => import('./gallery-main/gallery-main.module').then(m => m.GalleryMainModule)},
  {path: 'blog', loadChildren: () => import('./blog-main/blog-main.module').then(m => m.BLogMainModule)},
  {path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
  {path: 'admin/login', loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
