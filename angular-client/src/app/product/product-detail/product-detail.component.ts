// ./angular-client/src/app/product/product-detail/product-detail.component.ts
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any[]= [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
        .switchMap((params: ParamMap) => this.productService.getProduct(params.get('id')))
        .subscribe(td => this.product =  td.product[0]);
  }

  goBack(): void {
    this.location.back();
  }



}
