import {NgModule} from '@angular/core';
import {CustomCarouselComponent} from './custom-carousel.component';
import {CommonModule} from '@angular/common';
import {CarouselModule} from 'primeng/carousel';
import {CustomCarouselSlideComponent} from './custom-carousel-slide/custom-carousel-slide.component';

const components = [
  CustomCarouselComponent,
  CustomCarouselSlideComponent,
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    CarouselModule
  ],
})
export class CustomCarouselModule {
}
