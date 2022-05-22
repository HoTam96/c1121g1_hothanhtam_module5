import {Component, OnInit} from '@angular/core';
import {InfomationServiceService} from "../../service/infomation-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ICategory} from "../../model/ICategory";
import {IRegion} from "../../model/IRegion";
import {IDirection} from "../../model/IDirection";
import {IPostUp} from "../../model/IPostUp";
import {ILand} from "../../model/ILand";

@Component({
  selector: 'app-infomation-bds',
  templateUrl: './infomation-bds.component.html',
  styleUrls: ['./infomation-bds.component.css']
})
export class InfomationBdsComponent implements OnInit {
  createForm: FormGroup;
  categoryList: ICategory[] = [];
  regionsList: IRegion[] = [];
  directionList: IDirection[] = [];
  postUpList: IPostUp[] = [];
  land: ILand;

  constructor(private infomationService: InfomationServiceService, private router: Router) {


  }

  ngOnInit(): void {
    this.infomationService.getCategory().subscribe((res: any) => {
      this.categoryList = res;
      console.log(this.categoryList);
      this.infomationService.getDirection().subscribe((res1: any) => {
        this.directionList = res1;
        console.log(this.directionList);
        this.infomationService.getPostUp().subscribe((res2: any) => {
          this.postUpList = res2;
          console.log(this.postUpList);
          this.infomationService.getRegion().subscribe((res3: any) => {
            this.regionsList = res3;
            console.log(this.regionsList);

            this.createForm = new FormGroup({
              id: new FormControl("", [Validators.required]),
              conditional: new FormControl("", [Validators.required]),
              address: new FormControl("", [Validators.required]),
              identification: new FormControl("", [Validators.required]),
              area: new FormControl("", [Validators.required, Validators.min(20)]),
              title: new FormControl("", [Validators.required]),
              content: new FormControl("", [Validators.required]),
              price: new FormControl("", [Validators.required ,
                Validators.min(10000000) , Validators.pattern('\\d+')]),
              photo: new FormControl("", [Validators.required]),
              startDate: new FormControl("", [Validators.required]),
              status: new FormControl("", [Validators.required]),
              direction: new FormControl(this.directionList[1], [Validators.required]),
              regions: new FormControl(this.regionsList[1], [Validators.required]),
              categoryLand: new FormControl(this.categoryList[0], [Validators.required]),
              postUp: new FormControl(this.postUpList[2], [Validators.required])
            });


          });


        });

      });


    });
  }

  get conditional() {
    return this.createForm.get('conditional');
  }

  get address() {
    return this.createForm.get('address');
  }

  get identification() {
    return this.createForm.get('identification');
  }

  get area() {
    return this.createForm.get('area');
  }

  get title() {
    return this.createForm.get('title');
  }

  get content() {
    return this.createForm.get('content');
  }

  get price() {
    return this.createForm.get('price');
  }

  get photo() {
    return this.createForm.get('photo');
  }

  get startDate() {
    return this.createForm.get('startDate');
  }

  get status() {
    return this.createForm.get('status');
  }

  get direction() {
    return this.createForm.get('direction');
  }

  get regions() {
    return this.createForm.get('regions');
  }

  get categoryLand() {
    return this.createForm.get('categoryLand');
  }

  get postUp() {
    return this.createForm.get('postUp');
  }


  submit() {
    this.land = this.createForm.value;
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-mdb-toggle', 'modal');
    button.setAttribute('data-mdb-target', '#successModal');
    container.appendChild(button);
    button.click();
  }

  ok() {
    this.createForm.controls['status'].setValue('đã đăng');
    this.infomationService.addNew(this.createForm.value).subscribe((res: any) => {
      this.router.navigate(['/information-list']);
    })
  }
}
