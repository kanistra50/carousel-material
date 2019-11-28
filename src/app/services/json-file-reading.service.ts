import {Injectable} from '@angular/core';
import portfolio from '../portfolio.json';

@Injectable({providedIn: 'root'})
export class JsonFileReaderService {
  private data = portfolio;

  getJsonData(): any {
    return this._getData();
  }

  private _getData(): any {
    return this.data ? this.data : portfolio;
  }
}
