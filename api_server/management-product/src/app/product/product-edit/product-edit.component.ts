import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceProductService} from "../../service/service-product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Iproduct} from "../../model/iproduct";
import {HttpErrorResponse} from "@angular/common/http";
import {CategorysService} from "../../service/categorys.service";
import {ICategory} from "../../model/ICategory";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  product: Iproduct;
  category1: ICategory;
  categorys: ICategory[] = [];


  id: number;

  constructor(private productService: ServiceProductService, private activatedRoute: ActivatedRoute,
              private router: Router, private category: CategorysService, private snackBar: MatSnackBar) {
    this.productForm = new FormGroup({
      id: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      price: new FormControl(""),
      description: new FormControl("", [Validators.required]),
      category: new FormControl("", [Validators.required]),


    })

  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
    this.productService.findById(this.id).subscribe((res: Iproduct) => {
      this.product = res;
      console.log(this.product);
      this.productForm.patchValue(this.product);
      console.log(this.productForm.value);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
    this.getAllCategorys();

  }

  submit() {
    this.productService.update(this.productForm.value.id, this.productForm.value).subscribe((res: Iproduct) => {
        const container = document.getElementById('main-container');
        const button = document.createElement('button');
        button.type = 'button';
        button.style.display = 'none';
        button.setAttribute('data-mdb-toggle', 'modal');
        button.setAttribute('data-mdb-target', '#successModal');
        container.appendChild(button);
        button.click();


        // this.router.navigate(['/product-list']);
        // this.snackBar.open('đã úp date thành công' , 'ok');
      },
      (error: HttpErrorResponse) => {
        alert('lỗi rồi mày');
      });

  }

  getAllCategorys() {
    this.category.getAllCategory().subscribe((res: ICategory[]) => {
      this.categorys = res
    });
  }

  compareFn(t1: ICategory, t2: ICategory): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }
}
