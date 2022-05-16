import {Component, OnInit} from '@angular/core';
import {ServiceProductService} from "../../service/service-product.service";
import {Iproduct} from "../../model/iproduct";
import {HttpErrorResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {ProductDeleteComponent} from "../product-delete/product-delete.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Iproduct[] = [];
  searchName: String;
  p: number = 1;

  constructor(private productService: ServiceProductService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct(): void {
    this.productService.getAll().subscribe((res: Iproduct[]) => {
        this.products = res;
      },
      (error: HttpErrorResponse) => {
        console.log(error);

      });
  }

  openDiaLogDelete(id) {
    this.productService.findById(id).subscribe(data => {
      const dialog = this.dialog.open(ProductDeleteComponent, {
        width: '780px', data: {data1: data},
      })
      dialog.afterClosed().subscribe(result => {
        console.log('đã tắt')
        this.ngOnInit();
      })
    })


  }


  searchByName() {
    this.productService.searchName(this.searchName).subscribe((res: Iproduct[]) => {
      this.products = res;
      this.p = 1;
    }, (error: HttpErrorResponse) => {
      alert('thôi bạn ơi')
    })
  }
}
