import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {IStudent} from "./IStudent";

@Component({
  selector: 'app-create-form-singin',
  templateUrl: './create-form-singin.component.html',
  styleUrls: ['./create-form-singin.component.css']
})
export class CreateFormSinginComponent implements OnInit {
  formSingin : FormGroup;
  countryList  =[
    {id : 1 , name : 'việt nam'},
    {id : 2 , name : 'úc'},
    {id : 3 , name : 'canada'},
  ];
  student : IStudent[]=[];


  constructor() {
    this.formSingin = new FormGroup({
      email : new FormControl("",[Validators.required]),
      passWord : new FormControl("",[Validators.required , Validators.minLength(6)]),
      confirmPassWord : new FormControl("",[Validators.required , Validators.minLength(6)]),
      country : new FormControl("",[Validators.required]),
      age : new FormControl("",[Validators.max(18)]),
      gender : new FormControl(""),
      phone : new FormControl("",[Validators.required])
    })
  }

  ValidationCustomer  (point : AbstractControl){
    let value = point.value;

  }

  ngOnInit(): void {
  }

  onsubmit() {
    let a = this.formSingin.value;
    console.log(a);
    this.student.unshift(a)

  }
  get email(){
   return  this.formSingin.get('email')
  }
  get passWord(){
    return  this.formSingin.get('passWord')
  }
  get confirmPassWord(){
    return this.formSingin.get('confirmPassWord')
  }

  checkPassWork() {
    if (this.formSingin.get('passWord')?.value !==this.formSingin.get('confirmPassWord')?.value){
      this.formSingin.get('confirmPassWord')?.setErrors({notMatch : 'mật khẩu không khớp'});
    }else {
      this.formSingin.get('confirmPassWord')?.setErrors({Match : 'mật khẩu đã khớp'});
    }

  }
}
