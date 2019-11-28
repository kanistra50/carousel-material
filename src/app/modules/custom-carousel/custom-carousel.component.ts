import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {PortfolioService} from '../../services/portfolio.service';
import {Portfolio} from '../../models/Portfolio.model';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss'],
  providers: [PortfolioService],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomCarouselComponent implements OnInit {
  selectedPortfolio: Portfolio;
  constructor(private protfolioService: PortfolioService) {}

  portfolios: Portfolio[];

  ngOnInit(): void {
    this.portfolios = this.protfolioService.portfolio;
  }

  onSelect(p: Portfolio): void {
    this._updateFocusedItem(p);
  }

  private _updateFocusedItem(p: Portfolio) {
    if (this.selectedPortfolio) {
      this.selectedPortfolio.isCurrentlySelected = false;
      this._markSelectedAsViewed();
    }
    this.selectedPortfolio = p;
    this.selectedPortfolio.isCurrentlySelected = true;
  }

  private _markSelectedAsViewed() {
    this.selectedPortfolio.isAlreadyViewed = true;
  }
}
