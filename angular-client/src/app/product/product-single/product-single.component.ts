// ./angular-client/src/app/product/product-list/product-list.component.ts
import { Component, OnInit, Input } from '@angular/core';

import { ProductService } from '../product.service';
import { UserService } from '../../_services/user.service';

import { CartService } from '../../_services/index';


@Component({
  selector: 'app-product',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.css']
})

export class ProductsingleComponent implements OnInit {
  @Input() productName;
  @Input() productPrice;
  @Input() productId;
  cartProduct: any;
  constructor(
    private userService: UserService,
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit(): void {

  }

  addtoCart(id) {
    this.cartService.cartItems.subscribe(res =>  this.cartProduct = res);
    this.cartProduct.cart.push({ productId: id });
    this.userService.update(this.cartProduct).subscribe(res => console.log(res));
  }
}
