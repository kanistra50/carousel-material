import {Component, Input, OnInit} from '@angular/core';
import {Portfolio} from '../../../models/Portfolio.model';

@Component({
  selector: 'app-custom-carousel-slide',
  templateUrl: './custom-carousel-slide.component.html',
  styleUrls: ['./custom-carousel-slide.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomCarouselSlideComponent implements OnInit {

  @Input() item: Portfolio;

  constructor() {}


  ngOnInit() {

  }
}
