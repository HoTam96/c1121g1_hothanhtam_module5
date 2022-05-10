import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../ICustomer";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  customerList : ICustomer[] = [
    {customerCode : 'KH-001',
      name : 'nguyễn văn khải',
      dateOfBirth : '2002-11-01',
      gender :'nam',
      idCard :'54567564',
      phone : '098811122',
      email :'hotam196@gmail.com',
      address : 'hai châu , đà nẵng',
    typeCustomer :'silver'},

    {customerCode : 'KH-002',
      name : 'nguyễn văn hội',
      dateOfBirth : '2002-11-01',
      gender :'nam',
      idCard :'0383935i8239',
      phone : '098811122',
      email :'hotam196@gmail.com',
      address : 'hai châu , đà nẵng',
      typeCustomer :'silver'},

    {customerCode : 'KH-004',
      name : 'nguyễn văn hùng',
      dateOfBirth : '2002-11-01',
      gender :'nam',
      idCard :'0383935i8239',
      phone : '098811122',
      email :'hotam196@gmail.com',
      address : 'hai châu , đà nẵng',
      typeCustomer :'silver'},

    {customerCode : 'KH-005',
      name : 'nguyễn văn huy',
      dateOfBirth : '2002-11-01',
      gender :'nam',
      idCard :'0383935i8239',
      phone : '098811122',
      email :'hotam196@gmail.com',
      address : 'hai châu , đà nẵng',
      typeCustomer :'silver'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
