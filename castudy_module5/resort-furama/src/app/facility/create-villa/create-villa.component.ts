import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RentType} from "../../model/rentType";

@Component({
  selector: 'app-create-villa',
  templateUrl: './create-villa.component.html',
  styleUrls: ['./create-villa.component.css']
})
export class CreateVillaComponent implements OnInit {
  createVilla: FormGroup;
  rentTypes: RentType[] = [
    {id: 1, name: 'ngày'},
    {id: 2, name: 'giờ'},
    {id: 3, name: 'tháng'},
    {id: 4, name: 'năm'}];

  constructor() {
    this.createVilla = new FormGroup({
      serviceName: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z]+')]),
      serviceCode: new FormControl("", [Validators.required]),
      area: new FormControl("", [Validators.required, Validators.pattern('^([0]*[1-9][0-9]*)|[1-9][0-9]*$')]),
      rentalCost: new FormControl("", [Validators.required]),
      maxPeople: new FormControl("", [Validators.required]),
      rentType: new FormControl(this.rentTypes[0], [Validators.required]),
      areaPool: new FormControl("", [Validators.required, Validators.pattern('^([0]*[1-9][0-9]*)|[1-9][0-9]*$')]),
      standRoom: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      numberFloor: new FormControl("", [Validators.required, Validators.pattern('^([0]*[1-9][0-9]*)|[1-9][0-9]*$')])
    })
  }

  ngOnInit(): void {
  }

  get serviceName() {
    return this.createVilla.get('serviceName');
  }

  get areaPool() {
    return this.createVilla.get('areaPool');
  }

  get serviceCode() {
    return this.createVilla.get('serviceCode');
  }

  get rentalCost() {
    return this.createVilla.get('rentalCost');
  }

  get maxPeople() {
    return this.createVilla.get('maxPeople');
  }

  get rentType() {
    return this.createVilla.get('rentType');
  }

  get standRoom() {
    return this.createVilla.get('standRoom');
  }

  get description() {
    return this.createVilla.get('description');
  }

  get numberFloor() {
    return this.createVilla.get('numberFloor');
  }

  get area() {
    return this.createVilla.get('area');
  }

  onsubmit() {
    console.log(this.createVilla.value)
  }

}
