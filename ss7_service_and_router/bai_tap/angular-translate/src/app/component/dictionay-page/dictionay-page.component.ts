import {Component, OnInit} from '@angular/core';
import {Iword} from "../../model/iword";
import {DictionaryServiceService} from "../../service/dictionary-service.service";

@Component({
  selector: 'app-dictionay-page',
  templateUrl: './dictionay-page.component.html',
  styleUrls: ['./dictionay-page.component.css']
})
export class DictionayPageComponent implements OnInit {
  words: Iword[] = [];
  check : boolean = true;

  constructor(private dictionaryService: DictionaryServiceService) {

  }

  ngOnInit(): void {
   this.words= this.dictionaryService.getList();
  }

}
