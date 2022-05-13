import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  editCustomer: FormGroup;
  typeCustomer = [
    {id: 1, name: 'Diamond'},
    {id: 2, name: 'Silver'},
    {id: 3, name: 'Member'}
  ];


  constructor() {
    this.editCustomer = new FormGroup({
      customerCode: new FormControl("KH-1234", [Validators.required, Validators.pattern('^(KH-)\\d{4}$')]),
      name: new FormControl("hồ thanh tâm", [Validators.required]),
      dateOfBirth: new FormControl("2002-09-08", [Validators.required]),
      gender: new FormControl("nam", [Validators.required]),
      idCard: new FormControl("999999999", [Validators.required, Validators.pattern('\\d{9}')]),
      phone: new FormControl("0999998765", [Validators.required, Validators.pattern('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$')]),
      email: new FormControl("hotam@gmail.com", [Validators.required, Validators.email]),
      address: new FormControl("quảng nam , đà nẵng", [Validators.required]),
      typeCustomer: new FormControl(this.typeCustomer[0], [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  get customerCode() {
    return this.editCustomer.get('customerCode')
  }

  get name() {
    return this.editCustomer.get('name')
  }

  get gender() {
    return this.editCustomer.get('gender')
  }

  get dateOfBirth() {
    return this.editCustomer.get('dateOfBirth')
  }

  get idCard() {
    return this.editCustomer.get('idCard')
  }

  get phone() {
    return this.editCustomer.get('phone')
  }

  get address() {
    return this.editCustomer.get('address')
  }

  get email() {
    return this.editCustomer.get('email')
  }

  onsubmit() {
    console.log(this.editCustomer.value)
  }
}
