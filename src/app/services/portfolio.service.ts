import {Injectable} from '@angular/core';
import {JsonFileReaderService} from './json-file-reading.service';
import {Portfolio} from '../models/Portfolio.model';

@Injectable()
export class PortfolioService {

  constructor(private JFR: JsonFileReaderService) {}

  get portfolio(): any {
    return this._getPortfolio();
  }

  private _getPortfolio(): Portfolio[] {
    const data = this.JFR.getJsonData();
    return data.map(cv => new Portfolio(cv));
  }
}
