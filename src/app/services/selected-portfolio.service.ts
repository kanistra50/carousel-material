import {Injectable} from '@angular/core';;
import {Portfolio} from '../models/Portfolio.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class SelectedPortfolioService {

  private currentPortfolio$ = new BehaviorSubject<Portfolio>(null);

  get portfolio(): Observable<Portfolio> {
    return this.currentPortfolio$.asObservable();
  }

  setPortfolio(value: Portfolio): void {
    this.currentPortfolio$.next(value);
  }
}
