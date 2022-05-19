import {Component, OnInit} from '@angular/core';
import {FacilityServiceService} from "../../../service/facility-service.service";
import {IFacility} from "../../../model/IFacility";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IServiceType} from "../../../model/IServiceType";
import {ICustomerType} from "../../../model/ICustomerType";

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.css']
})
export class HomeServiceComponent implements OnInit {
  facilityList: IFacility[] = [];
  addFormFacility: FormGroup;
  editFormFacility: FormGroup;
  editFacility: IFacility;
  deleteFacility: IFacility;
  serviceType: IServiceType[] = [];
  checkEdit: boolean = false;
  p: number = 1;


  constructor(private facilityService: FacilityServiceService) {
    this.addFormFacility = new FormGroup({
      serviceName: new FormControl("", [Validators.required]),
      title: new FormControl("", [Validators.required]),
      serviceType: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      area: new FormControl("", [Validators.required]),
      image: new FormControl("", [Validators.required]),
    });

    this.editFormFacility = new FormGroup({
      id: new FormControl(""),
      serviceName: new FormControl(""),
      title: new FormControl(""),
      serviceType: new FormControl(""),
      price: new FormControl(""),
      area: new FormControl(""),
      image: new FormControl(""),
    })
  }

  ngOnInit(): void {
    this.facilityService.getServiceType().subscribe((res: any) => {
      this.serviceType = res;
      this.facilityService.getAllFacility().subscribe((res: any) => {
        this.facilityList = res;
        console.log(this.facilityList);
        this.addFormFacility.controls['serviceType'].setValue(this.serviceType[0]);
      }, error => {
        alert('em sai rồi')
      });
    }, (error => {
      alert('lỗi thông tin loại dịch vụ')
    }));
  }

  get serviceName() {
    return this.addFormFacility.get('serviceName');
  }

  get title() {
    return this.addFormFacility.get('title');
  }

  get price() {
    return this.addFormFacility.get('price');
  }

  get area() {
    return this.addFormFacility.get('area');
  }

  get image() {
    return this.addFormFacility.get('image');
  }


  public onOpenModal(facility: IFacility, mode: String): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-mdb-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-mdb-target', '#addModal');
    }
    if (mode === 'edit') {
      console.log(facility);
      this.editFacility = facility;
      this.checkEdit = true;
      this.editFormFacility.patchValue(this.editFacility);
      button.setAttribute('data-mdb-target', '#editModal');
    }
    if (mode === 'delete') {
      this.deleteFacility = facility;

      button.setAttribute('data-mdb-target', '#deleteModal');
    }
    container.appendChild(button);
    button.click();
  }

  compareFn(t1: IFacility, t2: IFacility): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }


  addNewModal(closeModal): void {
    closeModal.click();
    this.facilityService.addNewFacility(this.addFormFacility.value).subscribe((res: any) => {
      this.addFormFacility.reset();
      this.ngOnInit();
    })
  }

  onUpdateFacility(event): void {

    this.facilityService.editFacility(this.editFacility.id, this.editFormFacility.value).subscribe((res: any) => {
      event.click();
      this.ngOnInit();
    });
  }

  onDeleteFacility(event): void {
    console.log(this.deleteFacility.id);
    this.facilityService.deleteFacility(this.deleteFacility.id).subscribe((res: any) => {
      event.click();
      this.ngOnInit();
    })

  }


}
