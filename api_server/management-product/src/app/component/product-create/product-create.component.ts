import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceProductService} from "../../service/service-product.service";
import {Iproduct} from "../../model/iproduct";
import {Router} from "@angular/router";
import {ICategory} from "../../model/ICategory";
import {CategorysService} from "../../service/categorys.service";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  categoryList: ICategory[] = [];


  constructor(private productService: ServiceProductService, private router: Router, private category: CategorysService,
              private snackBar: MatSnackBar) {
    this.executes();

  };


  ngOnInit(): void {
    // this.executes();
  }


  submit() {
    this.productService.save(this.productForm.value).subscribe((res: Iproduct) => {
      this.router.navigate(['/product-list'])
      this.snackBar.open('đã thêm thành công', 'ok');
    });
  }


  executes = async () => {
    const reponse = await this.promise1;
    console.log('huhu');
    console.log(reponse);
    const reponse2 = await this.prmise2;
    console.log('hoho');
  };

  promise1 = new Promise((resolve, reject) => {
    this.category.getAllCategory().subscribe((res: ICategory[]) => {
      this.categoryList = res;
      console.log('haha')
    }, reject);
  });

  prmise2 = new Promise((resolve) => {
    this.productForm = new FormGroup({
      id: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      category: new FormControl(this.categoryList[1], [Validators.required]),
    });

  });

  compareFn(t1: ICategory, t2: ICategory): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }


}
