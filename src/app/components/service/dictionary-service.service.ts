import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  dics = new Map([
    ['Hello', 'Xin Chào'],
    ['Hi', 'Xin chào'],
    ['Hihi', 'Xin chào']
  ]);

  find(keyword: string): string {
    return this.dics.get(keyword);
  }

  constructor() {
  }
}
