import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RentType} from "../../model/rentType";

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent implements OnInit {

  createHouse: FormGroup;
  rentTypes: RentType[] = [
    {id: 1, name: 'ngày'},
    {id: 2, name: 'giờ'},
    {id: 3, name: 'tháng'},
    {id: 4, name: 'năm'}];

  constructor() {
    this.createHouse = new FormGroup({
      serviceName: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z]+')]),
      serviceCode: new FormControl("", [Validators.required]),
      area: new FormControl("", [Validators.required, Validators.pattern('^([0]*[1-9][0-9]*)|[1-9][0-9]*$')]),
      rentalCost: new FormControl("", [Validators.required]),
      maxPeople: new FormControl("", [Validators.required]),
      rentType: new FormControl(this.rentTypes[0], [Validators.required]),
      standRoom: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      numberFloor: new FormControl("", [Validators.required, Validators.pattern('^([0]*[1-9][0-9]*)|[1-9][0-9]*$')])
    })
  }

  ngOnInit(): void {
  }

  get serviceName() {
    return this.createHouse.get('serviceName');
  }


  get serviceCode() {
    return this.createHouse.get('serviceCode');
  }

  get rentalCost() {
    return this.createHouse.get('rentalCost');
  }

  get maxPeople() {
    return this.createHouse.get('maxPeople');
  }

  get rentType() {
    return this.createHouse.get('rentType');
  }

  get standRoom() {
    return this.createHouse.get('standRoom');
  }

  get description() {
    return this.createHouse.get('description');
  }

  get numberFloor() {
    return this.createHouse.get('numberFloor');
  }

  get area() {
    return this.createHouse.get('area');
  }

  onsubmit() {
    console.log(this.createHouse.value)
  }

}
