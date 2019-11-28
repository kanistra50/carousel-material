import { NgModule } from '@angular/core';
import {CustomCarouselComponent} from './custom-carousel.component';
import {CommonModule} from '@angular/common';
import {MatCarousel, MatCarouselComponent, MatCarouselModule} from '@ngmodule/material-carousel';
import {CarouselModule} from 'primeng/carousel';

const components = [
  CustomCarouselComponent,
];
@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    // MatCarouselModule,
    CarouselModule
  ],
})
export class CustomCarouselModule { }
