import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IBook} from "../model/IBook";
import {IStudent} from "../model/IStudent";
import {BrowBookServiceService} from "../brow-book-service.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import set = Reflect.set;

@Component({
  selector: 'app-brow-book',
  templateUrl: './brow-book.component.html',
  styleUrls: ['./brow-book.component.css']
})
export class BrowBookComponent implements OnInit {
  browBookForm: FormGroup;
  book: IBook;
  studentList: IStudent[] = [];
  id: number;

  constructor(private browBookService: BrowBookServiceService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });

    this.browBookService.getStudentList().subscribe((res: IStudent[]) => {
      this.studentList = res;
      this.getBookById();
    }, (error => {
      alert('ngu');
    }));

  }

  submit() {
    this.browBookForm.controls['bookId'].setValue(this.book);
    this.browBookForm.controls['status'].setValue(true);

    console.log(this.browBookForm.value);
    this.browBookService.addNewBrowBook(this.browBookForm.value).subscribe((res: void) => {

      this.book.quality = this.book.quality - 1;
      this.browBookService.updateBook(this.book.id, this.book).subscribe((res: any) => {
        const container = document.getElementById('main-container');
        const button = document.createElement('button');
        button.type = 'button';
        button.style.display = 'none';
        button.setAttribute('data-mdb-toggle', 'modal');
        button.setAttribute('data-mdb-target', '#successModal');
        container.appendChild(button);
        button.click();
      });

    }, (error => {
      alert("ngu")
    }));
  }

  getBookById() {
    this.browBookService.getBookById(this.id).subscribe((res1: IBook) => {
      this.book = res1;

      this.browBookForm = new FormGroup({
        browCode: new FormControl("", [Validators.required]),
        status: new FormControl("", [Validators.required]),
        startDate: new FormControl("", [Validators.required]),
        endDate: new FormControl("", [Validators.required]),
        bookId: new FormControl(this.book.bookName, [Validators.required]),
        studentId: new FormControl(this.studentList[0], [Validators.required]),
      });

    }, (error => {
      alert('lỗi lấy sách theo id');
    }));
  }

  getStudentList() {
    this.browBookService.getStudentList().subscribe((res: IStudent[]) => {
      this.studentList = res;
    }, (error => {
      alert('ngu');
    }));
  }

}
