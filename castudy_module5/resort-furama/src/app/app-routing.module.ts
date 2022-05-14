import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeServiceComponent} from "./homePage/home-service/home-service.component";
import {EditFacilityComponent} from "./facility/edit-facility/edit-facility.component";
import {ListContractComponent} from "./contract/list-contract/list-contract.component";
import {CreateContractComponent} from "./contract/create-contract/create-contract.component";
import {ListComponent} from "./customer/list/list.component";
import {CreateCustomerComponent} from "./customer/create-customer/create-customer.component";
import {EditCustomerComponent} from "./customer/edit-customer/edit-customer.component";
import {CreateVillaComponent} from "./facility/create-villa/create-villa.component";
import {CreateHouseComponent} from "./facility/create-house/create-house.component";
import {CreateRoomComponent} from "./facility/create-room/create-room.component";



const routes: Routes = [
    {path : '', component : HomeServiceComponent},
  {path: 'edit-service' , component: EditFacilityComponent},
  {path: 'list-contract', component: ListContractComponent},
  {path: 'create-contract',component: CreateContractComponent},
  {path: 'customer-list',component: ListComponent},
  {path: 'create-customer',component: CreateCustomerComponent},
  {path: 'edit-customer',component: EditCustomerComponent},
  {path: 'create-villa',component: CreateVillaComponent},
  {path: 'create-house',component: CreateHouseComponent},
  {path: 'create-room',component: CreateRoomComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
