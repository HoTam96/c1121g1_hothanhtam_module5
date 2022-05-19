import {Component, OnInit} from '@angular/core';
import {BrowBookServiceService} from "../brow-book-service.service";
import {IBrowBook} from "../model/IBrowBook";
import {IBook} from "../model/IBook";

@Component({
  selector: 'app-brow-book-list',
  templateUrl: './brow-book-list.component.html',
  styleUrls: ['./brow-book-list.component.css']
})
export class BrowBookListComponent implements OnInit {
  browBookList: IBrowBook[] = [];
  book: IBook;

  constructor(private browBookService: BrowBookServiceService) {
  }

  ngOnInit(): void {
    this.getAllBrow();
  }

  browBook(a: IBrowBook) {
    a.status = false;
    this.browBookService.findBookById(a.bookId.id).subscribe((data) => {
      this.book = data;
      this.book.quality = this.book.quality + 1;

      this.browBookService.updateBrowBook(a.id, a).subscribe((res: any) => {

        this.browBookService.updateBook(this.book.id, this.book).subscribe((respon: any) => {

          const container = document.getElementById('main-container');
          const button = document.createElement('button');
          button.type = 'button';
          button.style.display = 'none';
          button.setAttribute('data-mdb-toggle', 'modal');
          button.setAttribute('data-mdb-target', '#successModal');
          container.appendChild(button);
          button.click();
          this.ngOnInit();


        });


      });
    });


  }


  getAllBrow() {
    this.browBookService.getAllBrowBook().subscribe((res: any) => {
      for (let a of res) {
        if (a.status == true) {
          this.browBookList.push(a);
        }
      }
    });
  }
}
