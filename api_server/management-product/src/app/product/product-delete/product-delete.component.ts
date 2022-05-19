import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {ServiceProductService} from "../../service/service-product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  id: number;
  nameProduct: any;
  idProduct: any;

  constructor(private productService: ServiceProductService, private activateRouter: ActivatedRoute, private router: Router,
              private snackBar: MatSnackBar,
              public  dialogRef: MatDialogRef<ProductDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {

    //  activateRouter.paramMap.subscribe((paramMap: ParamMap) => {
    //    this.id = +paramMap.get('id');
    //    this.productService.deleteProduct(this.id).subscribe((res :void)=>{
    //   router.navigate(['/product-list']);
    // })
    //
    //  });

  }


  ngOnInit(): void {
    this.nameProduct = this.data.data1.name;
    this.idProduct = this.data.data1.id;
  }


  deleletProduct() {
    this.productService.deleteProduct(this.idProduct).subscribe(data => {
      this.snackBar.open('đã xóa thành công', 'ok');
      this.dialogRef.close();
    })

  }

  colse() {
    this.dialogRef.close();
    this.router.navigate(['/product'])
  }
}

