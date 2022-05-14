import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DictionaryServiceService} from "../../service/dictionary-service.service";
import {Iword} from "../../model/iword";

@Component({
  selector: 'app-dictionay-detail',
  templateUrl: './dictionay-detail.component.html',
  styleUrls: ['./dictionay-detail.component.css']
})
export class DictionayDetailComponent implements OnInit {
  word: Iword;

  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryServiceService) {
    activatedRoute.paramMap.subscribe((paramap: ParamMap) => {
      const id = paramap.get('id');
      if (id != null) {
        const temp = this.dictionaryService.findById(parseInt(id));
        console.log(temp);
        if (temp != null) {
          this.word = temp;
        }
      }
    })

  }

  ngOnInit(): void {
  }

}
