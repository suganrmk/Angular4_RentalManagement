// ./angular-client/src/app/header.component.ts
import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css' ]
})
export class HeaderComponent implements OnInit {
  products: any[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
   
  }

 
}
