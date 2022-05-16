import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './conponent/homePage/navbar/navbar.component';
import {HeaderComponent} from './conponent/homePage/header/header.component';
import {FooterComponent} from './conponent/homePage/footer/footer.component';
import {HomeServiceComponent} from "./conponent/homePage/home-service/home-service.component";
import {ListContractComponent} from "./conponent/contract/list-contract/list-contract.component";
import {CreateContractComponent} from "./conponent/contract/create-contract/create-contract.component";
import {ListComponent} from "./conponent/customer/list/list.component";
import {EditCustomerComponent} from "./conponent/customer/edit-customer/edit-customer.component";
import {CreateCustomerComponent} from "./conponent/customer/create-customer/create-customer.component";
import {ReactiveFormsModule} from "@angular/forms";

import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeServiceComponent,
    ListContractComponent,
    CreateContractComponent,
    ListComponent,
    EditCustomerComponent,
    CreateCustomerComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    HeaderComponent,
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
