import {Component, Input} from '@angular/core';
import {Portfolio} from '../../../models/Portfolio.model';

@Component({
  selector: 'app-custom-carousel-slide',
  templateUrl: './custom-carousel-slide.component.html',
  styleUrls: ['./custom-carousel-slide.component.scss'],
})
export class CustomCarouselSlideComponent {
  @Input() item: Portfolio;
}
