import {Component, OnInit} from '@angular/core';
import {BrowBookServiceService} from "../../brow-book-service.service";
import {IBook} from "../../model/IBook";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: IBook[] = [];
  p: number = 1;


  constructor(private browBookService: BrowBookServiceService) {
  }

  ngOnInit(): void {
    this.browBookService.getAll().subscribe((res: IBook[]) => {
      console.log('haha');
      this.bookList = res;
    }, (error => {
      alert('lỗi');
    }))
  }

  onBook() {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-mdb-toggle', 'modal');
    button.setAttribute('data-mdb-target', '#successModal');
    container.appendChild(button);
    button.click();
  }
}
