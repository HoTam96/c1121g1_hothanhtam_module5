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
  searchBookName  ='';
  searchStudentName = '';

  constructor(private browBookService: BrowBookServiceService) {
  }

  ngOnInit(): void {
    this.getAllBrow();
  }

  browBook(a: IBrowBook) {
    console.log(a);
    a.status = false;
    this.book = a.bookId;
    console.log(this.book);
    this.book.quality = this.book.quality + 1;

    this.browBookService.updateBook(this.book.id, this.book).subscribe((respon: any) => {
      console.log(this.book);
      this.browBookService.updateBrowBook(a.id, a).subscribe((res: any) => {
        console.log(res);
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


  }

  getAllBrow() {
    this.browBookService.getAllBrowBook(this.searchBookName,this.searchStudentName).subscribe((res: any) => {
      console.log(res)
      this.browBookList = [];
      for (let a of res) {
        if (a.status == true) {
          this.browBookList.push(a);
        }
      }
    });
    console.log(this.browBookList);
  }

  getAllBrowBook1() {
    this.browBookService.getAllBrowBook(this.searchBookName, this.searchStudentName).subscribe((res: any) => {
      this.browBookList = [];
      for (let a of res) {
        if (a.status == true) {
          this.browBookList.push(a);
        }
      }
      if (this.browBookList.length==0){
        alert('ko tìm thấy tên muốn tìm')

      }
    })
  }
}
