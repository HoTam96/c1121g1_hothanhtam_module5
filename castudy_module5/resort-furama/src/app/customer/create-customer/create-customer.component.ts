import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  createCustomer: FormGroup;
  typeCustomer = [
    {id: 1, name: 'Diamond'},
    {id: 2 ,name: 'Silver'},
    {id: 3, name: 'Member'}
  ];

  constructor() {
    this.createCustomer = new FormGroup({
      customerCode: new FormControl("", [Validators.required , Validators.pattern('^(KH-)\\d{4}$')]),
      name: new FormControl("", [Validators.required]),
      dateOfBirth: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      idCard: new FormControl("", [Validators.required , Validators.pattern('\\d{9}')]),
      phone: new FormControl("", [Validators.required , Validators.pattern('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$')]),
      email: new FormControl("", [Validators.required , Validators.email]),
      address: new FormControl("", [Validators.required]),
      typeCustomer: new FormControl(this.typeCustomer[0], [Validators.required]),
})
  }

  get customerCode (){
    return this.createCustomer.get('customerCode')
  }

  get name(){
    return this.createCustomer.get('name')
  }
  get gender(){
    return this.createCustomer.get('gender')
  }
  get dateOfBirth(){
    return this.createCustomer.get('dateOfBirth')
  }
  get idCard (){
    return this.createCustomer.get('idCard')
  }
  get phone(){
    return this.createCustomer.get('phone')
  }

  get address(){
    return this.createCustomer.get('address')
  }
 get email(){
    return this.createCustomer.get('email')
 }


  ngOnInit(): void {
  }

  onsubmit() {
    console.log(this.createCustomer.value)
  }
}
