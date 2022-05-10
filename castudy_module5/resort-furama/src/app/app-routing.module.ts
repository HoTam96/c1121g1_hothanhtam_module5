import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeServiceComponent} from "./home-service/home-service.component";
import {EditFacilityComponent} from "./edit-facility/edit-facility.component";
import {ListContractComponent} from "./contract/list-contract/list-contract.component";
import {CreateContractComponent} from "./contract/create-contract/create-contract.component";
import {ListComponent} from "./customer/list/list.component";
import {CreateCustomerComponent} from "./customer/create-customer/create-customer.component";
import {EditCustomerComponent} from "./customer/edit-customer/edit-customer.component";


const routes: Routes = [
    {path : '', component : HomeServiceComponent},
  {path: 'edit-service' , component: EditFacilityComponent},
  {path: 'list-contract', component: ListContractComponent},
  {path: 'create-contract',component: CreateContractComponent},
  {path: 'customer-list',component: ListComponent},
  {path: 'create-customer',component: CreateCustomerComponent},
  {path: 'edit-customer',component: EditCustomerComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
