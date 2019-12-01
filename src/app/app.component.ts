import {Component, OnInit} from '@angular/core';
import {SelectedPortfolioService} from './services/selected-portfolio.service';
import {Portfolio} from './models/Portfolio.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'User Content';
  portfolio: Observable<Portfolio>;

  constructor(private selectedPortfolioService: SelectedPortfolioService) {}

  ngOnInit(): void {
    this.portfolio = this.selectedPortfolioService.portfolio;
  }
}
