import {Component, OnInit} from '@angular/core';
import {ServiceProductService} from "../../service/service-product.service";
import {Iproduct} from "../../model/iproduct";
import {HttpErrorResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {ProductDeleteComponent} from "../product-delete/product-delete.component";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Iproduct[] = [];
  searchName: String;
  p: number = 1;
  listIdDelete: number[] = [];

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
      });
      dialog.afterClosed().subscribe(result => {
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

  checkDelete(id: number) {
    console.log(this.listIdDelete);
    let flag = false;
    for (let idd of this.listIdDelete) {
      if (id == idd) {
        this.listIdDelete = this.listIdDelete.filter(thisId => {
          flag = true;
          return thisId != id;
        })
      }
    }
    if (!flag) {
      this.listIdDelete.push(id);
    }
    console.log(this.listIdDelete);
  }

  countDel = 0;

  deleteMul(closeMulDelModal: HTMLButtonElement) {
    for (let id of this.listIdDelete) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.countDel++;
      }, error => {
      }, () => {
        if (this.countDel == this.listIdDelete.length) {
          this.ngOnInit();
          closeMulDelModal.click();
        }
      })
    }
  }
}
