// ./angular-client/src/app/product/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductCatComponent implements OnInit {

  product: any = {};
  products: any[] = [];

  productToEdit: any = {};
  productToDelete: any = {};
  fetchingData: boolean = false;
  apiMessage: string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void { 
    this.productService.getProducts()
    .then(products => this.products = products.products);
  }
}
