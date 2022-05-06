import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.css']
})
export class SimpleCalculatorComponent implements OnInit {
  num1: number;
  num2: number;
  results: number;
  phepTinh: string;

  constructor() {

  }

  ngOnInit(): void {
  }

  result(num1, num2): number {
    num1 = parseInt(num1)
    num2 = parseInt(num2);
    switch (this.phepTinh) {
      case '+' :
        this.results = num1 + num2;
        break;
      case '-' :
        this.results = num1 - num2;
        break;
      case 'x' :
        this.results = num1 * num2;
        break;
      case '/' :
        this.results = num1 / num2;
        break;
    }
    return this.results;
  }

}
