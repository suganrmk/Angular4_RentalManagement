// ./angular-client/src/app/home.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProductService } from '../product/product.service';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {
  products: any[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    document.body.classList.add('home');

    this.productService.getProducts()
      .then(products => this.products = products.products.reverse().slice(0, 6));
  }
  ngOnDestroy() {
    document.body.classList.remove('home');
  }
}
