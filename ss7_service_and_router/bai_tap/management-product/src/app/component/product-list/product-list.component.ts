import {Component, OnInit} from '@angular/core';
import {ServiceProductService} from "../../service/service-product.service";
import {Iproduct} from "../../model/iproduct";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Iproduct[] = [];

  constructor(private productService: ServiceProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getAll();
  }
}
