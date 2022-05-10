import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HomeServiceComponent} from "./home-service/home-service.component";
import { EditFacilityComponent } from './edit-facility/edit-facility.component';
import {ListContractComponent} from "./contract/list-contract/list-contract.component";
import {CreateContractComponent} from "./contract/create-contract/create-contract.component";
import {ListComponent} from "./customer/list/list.component";
import {EditCustomerComponent} from "./customer/edit-customer/edit-customer.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeServiceComponent,
    EditFacilityComponent,
    ListContractComponent,
    CreateContractComponent,
    ListComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  exports: [
    HeaderComponent,
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
