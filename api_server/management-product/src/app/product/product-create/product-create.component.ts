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


  };


  ngOnInit(): void {
    this.category.getAllCategory().subscribe((res: ICategory[]) => {
      this.categoryList = res;
      this.productForm = new FormGroup({
        id: new FormControl("", [Validators.required]),
        name: new FormControl("", [Validators.required]),
        price: new FormControl("", [Validators.required]),
        description: new FormControl("", [Validators.required]),
        category: new FormControl(this.categoryList[1], [Validators.required]),
      });
    });
    console.log('haha1')
  }

  submit() {
    console.log('hihi')
    this.productService.save(this.productForm.value).subscribe((res: Iproduct) => {
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-mdb-toggle', 'modal');
      button.setAttribute('data-mdb-target', '#successModal');
      container.appendChild(button);
      button.click();
      // this.router.navigate(['/product']);
      // this.snackBar.open('đã thêm thành công', 'ok');
    });
  }

}
