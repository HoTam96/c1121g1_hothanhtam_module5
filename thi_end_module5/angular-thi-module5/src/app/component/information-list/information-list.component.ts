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
  pageNumber: number;
  totalPages = 0;

  ngOnInit(): void {
    this.infomationService.getAll(this.pageNumber,this.serarchByPrice, this.serarchByArea, this.searchByDirection).subscribe((res: any) => {
      this.landList = res.content;
      this.pageNumber=res.pageable.pageNumber;
      this.totalPages=res.pageable.totalPages;
    });
  }

  search() {
    this.ngOnInit();
  }

  previousPage() {
    this.infomationService.getAll(this.pageNumber-1,this.serarchByPrice, this.serarchByArea, this.searchByDirection).subscribe((res: any) => {
      this.landList = res.content;
      this.pageNumber=res.pageable.pageNumber;
      this.totalPages=res.totalPages;
    });

  }

  nextPage() {
    this.infomationService.getAll(this.pageNumber+1,this.serarchByPrice, this.serarchByArea, this.searchByDirection).subscribe((res: any) => {
      this.landList = res.content;
      this.pageNumber=res.pageable.pageNumber;
      this.totalPages=res.pageable.totalPages;
    });

  }
}
