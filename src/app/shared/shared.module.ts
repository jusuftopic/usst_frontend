import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloaderComponent} from './preloader/preloader.component';
import {HeroComponent} from './hero/hero.component';
import {TrainingCategoryComponent} from './training-category/training-category.component';
import {OfferComponent} from './offer/offer.component';
import {GalleryComponent} from './gallery/gallery.component';
import {BlogSharedComponent} from './blog-shared/blog-shared.component';
import {ServiceSharedComponent} from './service-shared/service-shared.component';
import {AboutComponent} from './about/about.component';
import {HeroSubComponent} from './hero-sub/hero-sub.component';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {StopPropagationDirective} from '../../assets/directive/stop-propagation.directive';


@NgModule({
  declarations: [PreloaderComponent, HeroComponent, TrainingCategoryComponent, OfferComponent, GalleryComponent, AboutComponent, BlogSharedComponent, ServiceSharedComponent, HeroSubComponent, StopPropagationDirective],
  exports: [
    PreloaderComponent,
    HeroComponent,
    TrainingCategoryComponent,
    OfferComponent,
    GalleryComponent,
    AboutComponent,
    BlogSharedComponent,
    ServiceSharedComponent,
    HeroSubComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ]
})
export class SharedModule {
}
