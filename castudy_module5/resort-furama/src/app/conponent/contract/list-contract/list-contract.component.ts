import { Component, OnInit } from '@angular/core';
import {IContract} from "./IContract";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
contractLists : IContract[]  = [
  {customerCode : 'KH-001',name : 'nguyễn thị hào',contractCode : 'HD-001',serviceName : 'VILLA VIP', serviceCode : 'SV-002',
    attachServiceName : 'nước lọc', quantity : '2',unit : '2',totalPayment : '100000'},
  {customerCode : 'KH-002',name : 'nguyễn thị lan',contractCode : 'HD-002',serviceName : 'VILLA VIP', serviceCode : 'SV-001',
    attachServiceName : 'nước lọc', quantity : '2',unit : '2',totalPayment : '200000'},
  {customerCode : 'KH-003',name : 'nguyễn thị huế',contractCode : 'HD-003',serviceName : 'VILLA VIP', serviceCode : 'SV-004',
    attachServiceName : 'nước lọc', quantity : '2',unit : '2',totalPayment : '300000'},
  {customerCode : 'KH-004',name : 'nguyễn thị huê',contractCode : 'HD-004',serviceName : 'VILLA VIP', serviceCode : 'SV-006',
    attachServiceName : 'nước lọc', quantity : '2',unit : '2',totalPayment : '400000'}

];

  constructor() { }

  ngOnInit(): void {
  }



}
