import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  contractForm: FormGroup;


  constructor() {
    this.contractForm = new FormGroup({

    })
  }

  ngOnInit(): void {
  }

}
