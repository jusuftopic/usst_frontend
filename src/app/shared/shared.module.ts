import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreloaderComponent} from './preloader/preloader.component';
import { HeroComponent } from './hero/hero.component';
import { TrainingCategoryComponent } from './training-category/training-category.component';
import { OfferComponent } from './offer/offer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogSharedComponent } from './blog-shared/blog-shared.component';
import { ServiceSharedComponent } from './service-shared/service-shared.component';
import {AboutComponent} from './about/about.component';
import { HeroSubComponent } from './hero-sub/hero-sub.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [PreloaderComponent, HeroComponent, TrainingCategoryComponent, OfferComponent, GalleryComponent, AboutComponent, BlogSharedComponent, ServiceSharedComponent, HeroSubComponent],
  exports: [
    PreloaderComponent,
    HeroComponent,
    TrainingCategoryComponent,
    OfferComponent,
    GalleryComponent,
    AboutComponent,
    BlogSharedComponent,
    ServiceSharedComponent,
    HeroSubComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
