import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeServiceComponent} from "./conponent/homePage/home-service/home-service.component";
import {ListContractComponent} from "./conponent/contract/list-contract/list-contract.component";
import {CreateContractComponent} from "./conponent/contract/create-contract/create-contract.component";
import {ListComponent} from "./conponent/customer/list/list.component";
import {CreateCustomerComponent} from "./conponent/customer/create-customer/create-customer.component";
import {EditCustomerComponent} from "./conponent/customer/edit-customer/edit-customer.component";




const routes: Routes = [
    {path : '', component : HomeServiceComponent},
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
