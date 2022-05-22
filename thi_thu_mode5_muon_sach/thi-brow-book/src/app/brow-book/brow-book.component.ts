import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IBook} from "../model/IBook";
import {IStudent} from "../model/IStudent";
import {BrowBookServiceService} from "../brow-book-service.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import set = Reflect.set;
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-brow-book',
  templateUrl: './brow-book.component.html',
  styleUrls: ['./brow-book.component.css']
})
export class BrowBookComponent implements OnInit {

  x:number = 0;


  
  browBookForm: FormGroup;
  book: IBook;
  studentList: IStudent[] = [];
  id: number;
  now : Date = new Date;
  now2 : string ;

  constructor(private browBookService: BrowBookServiceService, private activatedRoute: ActivatedRoute, private router: Router, private datepipe: DatePipe) {

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

  validateEndDateBefore() {
    let date1 = new Date(this.browBookForm.get('startDate').value);
    let date2 = new Date(this.browBookForm.get('endDate').value);
    if (date1?.getTime() >= date2?.getTime()) {
      this.browBookForm.get('endDate').setErrors({endDateBefore: true});
    }
  }


  validateStartDateBefore() {
    let date1 = new Date(this.browBookForm.get('startDate').value);
    let today = new Date();
    if (date1?.getTime() <= today?.getTime()) {
      this.browBookForm.get('startDate').setErrors({startDateBefore: true});
    }
  }



  setDateStart() {
   this.now2 = this.datepipe.transform(this.now, 'yyyy-MM-dd');
    this.browBookForm.controls['startDate'].setValue(this.now2)
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
      console.log(this.browBookForm);
    }, (error => {
      alert("ngu")
    }));
  }

  getBookById() {
    this.browBookService.getBookById(this.id).subscribe((res1: IBook) => {
      this.book = res1;
      this.browBookForm = new FormGroup({
        browCode: new FormControl("", [Validators.required, Validators.pattern('(MS-)[0-9]\\d{3}')]),
        status: new FormControl("", [Validators.required]),
        startDate: new FormControl('', [Validators.required ,Validators.pattern('\\d{4}[\\-\\/\\s]?((((0[13578])|(1[02]))[\\-\\/\\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\\-\\/\\s]?(([0-2][0-9])|(30)))|(02[\\-\\/\\s]?[0-2][0-9]))$')]),
        endDate: new FormControl("", [Validators.required , Validators.pattern('\\d{4}[\\-\\/\\s]?((((0[13578])|(1[02]))[\\-\\/\\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\\-\\/\\s]?(([0-2][0-9])|(30)))|(02[\\-\\/\\s]?[0-2][0-9]))$')]),
        bookId: new FormControl(this.book.bookName, [Validators.required]),
        studentId: new FormControl(this.studentList[0], [Validators.required]),
      });
      this.setDateStart();
      console.log(this.browBookForm)
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

  get browCode(){
    return this.browBookForm.get('browCode');
  }
  get startDate(){
    return this.browBookForm.get('startDate');
  }
  get endDate(){
    return this.browBookForm.get('endDate');
  }
  get bookId(){
    return this.browBookForm.get('bookId');
  }
  get studentId(){
    return this.browBookForm.get('studentId');
  }

}
