import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../../services/portfolio.service';
import {Portfolio} from '../../models/Portfolio.model';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss'],
  providers: [PortfolioService],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomCarouselComponent implements OnInit {
  constructor(private protfolioService: PortfolioService) {}

  portfolios: Portfolio[];

  ngOnInit() {
    this.portfolios = this.protfolioService.portfolio;
  }
}
