import {Component, OnInit} from '@angular/core';
import {InfomationServiceService} from "../../service/infomation-service.service";
import {ILand} from "../../model/ILand";

@Component({
  selector: 'app-information-list',
  templateUrl: './information-list.component.html',
  styleUrls: ['./information-list.component.css']
})
export class InformationListComponent implements OnInit {

  constructor(private infomationService: InfomationServiceService) {
  }

  landList: ILand[] = [];
  serarchByArea = '';
  serarchByPrice = '';
  searchByDirection = '';

  ngOnInit(): void {
    this.infomationService.getAll(this.serarchByPrice, this.serarchByArea, this.searchByDirection).subscribe((res: any) => {
      this.landList = res.content;
      console.log(this.landList)
    });
  }

  search() {
    this.ngOnInit();
  }
}
