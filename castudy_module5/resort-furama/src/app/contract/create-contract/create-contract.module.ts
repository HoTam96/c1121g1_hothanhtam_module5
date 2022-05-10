import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateContractComponent } from './create-contract.component';
import {AppModule} from "../../app.module";



@NgModule({
  declarations: [CreateContractComponent],
    imports: [
        CommonModule,
        AppModule
    ]
})
export class CreateContractModule { }
