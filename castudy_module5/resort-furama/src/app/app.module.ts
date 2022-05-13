import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './homePage/navbar/navbar.component';
import { HeaderComponent } from './homePage/header/header.component';
import { FooterComponent } from './homePage/footer/footer.component';
import {HomeServiceComponent} from "./homePage/home-service/home-service.component";
import { EditFacilityComponent } from './facility/edit-facility/edit-facility.component';
import {ListContractComponent} from "./contract/list-contract/list-contract.component";
import {CreateContractComponent} from "./contract/create-contract/create-contract.component";
import {ListComponent} from "./customer/list/list.component";
import {EditCustomerComponent} from "./customer/edit-customer/edit-customer.component";
import {CreateCustomerComponent} from "./customer/create-customer/create-customer.component";
import { ReactiveFormsModule} from "@angular/forms";
import { CreateVillaComponent } from './facility/create-villa/create-villa.component';
import { CreateHouseComponent } from './facility/create-house/create-house.component';
import { CreateRoomComponent } from './facility/create-room/create-room.component';


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
    EditCustomerComponent,
    CreateCustomerComponent,
    CreateVillaComponent,
    CreateHouseComponent,
    CreateRoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [
    HeaderComponent,
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
