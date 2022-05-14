import {Component, OnInit} from '@angular/core';
import {ServiceProductService} from "../../service/service-product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private productService: ServiceProductService, private activateRouter: ActivatedRoute, private router: Router) {
    activateRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      const product = this.productService.findById(id);
      if (product != null) {
        this.productService.deleteProduct(id)
      }
    });
    router.navigate(['/product-list']);
  }

  ngOnInit(): void {
  }


}
