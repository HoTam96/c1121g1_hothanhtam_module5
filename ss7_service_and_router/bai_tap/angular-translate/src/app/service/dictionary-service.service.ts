import {Injectable} from '@angular/core';
import {Iword} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  words: Iword[] = [
    {id: 1, word: 'hello', mean: 'xin chào'},
    {id: 2, word: 'baby', mean: 'cưng'},
    {id: 3, word: 'important', mean: 'quan trọng'},
    {id: 4, word: 'lake', mean: 'hồ'},
    {id: 5, word: 'cave', mean: 'động'}
  ];

  constructor() {
  }

  getList() {
    return this.words;
  }

  findById(id: number) {
    for (let a of this.words) {
      if (a.id == id) {
        return a;
      }

    }
    return null;
  }

}
