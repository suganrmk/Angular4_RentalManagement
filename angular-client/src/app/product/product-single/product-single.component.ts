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
  addedProduct: any;

  constructor(
    private userService: UserService,
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit(): void {

  }

  addtoCart(id) {
    this.productService.getProduct(id).then(td => {
      this.addedProduct = td.product[0];
      this.cartService.cartItems.subscribe(res => this.cartProduct = res);
     const filterproduct = this.cartProduct.cart.filter(t => t._id == id);
     if (filterproduct.length === 0) {
      this.cartProduct.cart.push(this.addedProduct);
      this.userService.update(this.cartProduct).subscribe(res => console.log(res));
     }else {
       alert('already added to cart');
     }
    });
  }
}
