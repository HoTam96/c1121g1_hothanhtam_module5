import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InfomationBdsComponent} from "./component/infomation-bds/infomation-bds.component";
import {InformationListComponent} from "./component/information-list/information-list.component";


const routes: Routes = [
  {path :'information-create',component :InfomationBdsComponent},
  {path :'information-list',component :InformationListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
