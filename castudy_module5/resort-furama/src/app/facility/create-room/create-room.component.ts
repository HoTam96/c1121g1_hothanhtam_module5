import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RentType} from "../../model/rentType";

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  createRoom: FormGroup;
  rentTypes: RentType[] = [
    {id: 1, name: 'ngày'},
    {id: 2, name: 'giờ'},
    {id: 3, name: 'tháng'},
    {id: 4, name: 'năm'}];

  constructor() {
    this.createRoom = new FormGroup({
      serviceName: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z]+')]),
      serviceCode: new FormControl("", [Validators.required]),
      area: new FormControl("", [Validators.required, Validators.pattern('^([0]*[1-9][0-9]*)|[1-9][0-9]*$')]),
      rentalCost: new FormControl("", [Validators.required]),
      maxPeople: new FormControl("", [Validators.required]),
      rentType: new FormControl(this.rentTypes[0], [Validators.required]),
      freeService: new FormControl("", [Validators.required])

    })
  }

  ngOnInit(): void {
  }

  get serviceName() {
    return this.createRoom.get('serviceName');
  }


  get serviceCode() {
    return this.createRoom.get('serviceCode');
  }

  get rentalCost() {
    return this.createRoom.get('rentalCost');
  }

  get maxPeople() {
    return this.createRoom.get('maxPeople');
  }

  get rentType() {
    return this.createRoom.get('rentType');
  }

  get area() {
    return this.createRoom.get('area');
  }

  get freeService() {
    return this.createRoom.get('freeService');
  }

  onsubmit() {
    console.log(this.createRoom.value)
  }

}
