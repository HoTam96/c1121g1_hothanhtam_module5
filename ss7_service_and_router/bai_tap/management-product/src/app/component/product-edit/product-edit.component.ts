import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceProductService} from "../../service/service-product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Iproduct} from "../../model/iproduct";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  product: Iproduct;

  constructor(private productService: ServiceProductService, private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      if (id != null) {
        const temp = this.productService.findById(id);
        if (temp != null) {
          this.product = temp;
        }
      }
    });
    this.productForm = new FormGroup({
      id: new FormControl(this.product.id, [Validators.required]),
      name: new FormControl(this.product.name, [Validators.required]),
      price: new FormControl(this.product.price, [Validators.required]),
      description: new FormControl(this.product.description, [Validators.required]),
    });


  }

  ngOnInit(): void {
  }

  submit() {
    this.productService.update(this.productForm.value.id, this.productForm.value);
    this.router.navigate(['/product-list']);
  }
}
