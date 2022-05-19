import {Component, OnInit} from '@angular/core';
import {ICustomer} from "../../../model/ICustomer";
import {CustomerServiceService} from "../../../service/customer-service.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ICustomerType} from "../../../model/ICustomerType";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  customerList: ICustomer[] = [];
  deleteCustomer?: ICustomer;
  editCustomer1?: ICustomer;
  check: boolean;
  checkEdit: boolean;
  editCustomerForm: FormGroup;
  customerType: ICustomerType[] = [];
  pageNumber: number;
  totalPages = 0;
  searchName = '';


  constructor(private customerService: CustomerServiceService, private router: Router, private snackBar: MatSnackBar) {
    this.checkEdit = false;
    this.editCustomerForm = new FormGroup({
      id: new FormControl(""),
      customerCode: new FormControl("", [Validators.required, Validators.pattern('^(KH-)\\d{4}$')]),
      name: new FormControl("", [Validators.required]),
      dateOfBirth: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      idCard: new FormControl("", [Validators.required, Validators.pattern('\\d{9}')]),
      phone: new FormControl("", [Validators.required, Validators.pattern('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$')]),
      email: new FormControl("", [Validators.required, Validators.email]),
      address: new FormControl("", [Validators.required]),
      customerType: new FormControl("", [Validators.required]),
    });

  }

  ngOnInit(): void {

    this.customerService.getAllCustomerType().subscribe((res1: ICustomerType[]) => {
        this.customerType = res1;
        console.log(this.customerType);
        this.getCustomerService();
      }, (error: HttpErrorResponse) => {
        alert('ngu chết mẹ đi')
      }
    );

  }

  getCustomerService() {
    this.customerService.getAllCustomer(this.searchName, this.pageNumber).subscribe((res: any) => {
      this.customerList = res.content;
      this.totalPages = res.totalPages;
      this.pageNumber = res.pageable.pageNumber;
    }, (error: HttpErrorResponse) => {
      alert('ngu chết mẹ mày đi')
    });

  }

  get customerCode() {
    return this.editCustomerForm.get('customerCode')
  }

  get name() {
    return this.editCustomerForm.get('name')
  }

  get gender() {
    return this.editCustomerForm.get('gender')
  }

  get dateOfBirth() {
    return this.editCustomerForm.get('dateOfBirth')
  }

  get idCard() {
    return this.editCustomerForm.get('idCard')
  }

  get phone() {
    return this.editCustomerForm.get('phone')
  }

  get address() {
    return this.editCustomerForm.get('address')
  }

  get email() {
    return this.editCustomerForm.get('email')
  }

  onOpenModal(a: ICustomer, model: String): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-mdb-toggle', 'modal');

    if (model == 'delete') {
      this.deleteCustomer = a;
      button.setAttribute('data-mdb-target', '#deleteModal');
    }
    if (model == 'edit') {
      this.editCustomerForm.patchValue(a);
      console.log(a);
      this.checkEdit = true;
      button.setAttribute('data-mdb-target', '#editModal');
    }
    container.appendChild(button);
    this.check = true;
    button.click();
  };


  delete(closeModal: HTMLButtonElement) {
    this.customerService.deleteCustomer(this.deleteCustomer).subscribe((res: void) => {
      closeModal.click();
      this.getCustomerService();

    }, (error: HttpErrorResponse) => {
      alert('sai rồi');
    })
  }

  onsubmit(closeModal: HTMLButtonElement) {
    closeModal.click();
    this.customerService.updateCustomer(this.editCustomerForm.value).subscribe((res: void) => {
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-mdb-toggle', 'modal');
      button.setAttribute('data-mdb-target', '#successModal');
      container.appendChild(button);
      // this.check = true;
      button.click();
      this.getCustomerService();

    }, (error: HttpErrorResponse) => {
      alert('gặp lỗi')
    });
  }

  compareFn(t1: ICustomerType, t2: ICustomerType): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }

  previousPage() {
    this.customerService.getAllCustomer(this.searchName, this.pageNumber - 1).subscribe((res: any) => {
      this.customerList = res.content;
      this.pageNumber = res.pageable.pageNumber;
      this.totalPages = res.totalPages;
    })

  }

  nextPage() {
    this.customerService.getAllCustomer(this.searchName, this.pageNumber + 1).subscribe((res: any) => {
      this.customerList = res.content;
      this.pageNumber = res.pageable.pageNumber;
      this.totalPages = res.totalPages;
      console.log(this.customerList)
    }, (error => {
      alert('cmm')
    }))
  }

  search(event) {
    this.searchName = event;
    this.pageNumber = 0;
    this.getCustomerService();
  }
}
