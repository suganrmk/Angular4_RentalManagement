// ./angular-client/src/app/app.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from './product/product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  constructor(private productService: ProductService) { }

 // class method for toggling  AddProductBox in todo-list.component.html
  showAddProductBox(e): void {
    e.preventDefault();
    this.productService.showAddProductBox = !this.productService.showAddProductBox;
  }

}
