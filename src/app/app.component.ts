import {Component, OnDestroy, OnInit} from '@angular/core';
import {SelectedPortfolioService} from './services/selected-portfolio.service';
import {Portfolio} from './models/Portfolio.model';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'User Content';
  selectedPortfolio: Portfolio;
  private destroy$ = new Subject<boolean>();

  constructor(private selectedPortfolioService: SelectedPortfolioService) {}

  ngOnInit(): void {
    this.selectedPortfolioService.portfolio.pipe(takeUntil(this.destroy$)).subscribe(res => this.selectedPortfolio = res);
  }


  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
