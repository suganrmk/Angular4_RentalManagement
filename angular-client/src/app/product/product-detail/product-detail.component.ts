// ./angular-client/src/app/product/product-detail/product-detail.component.ts
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { UserService } from '../../_services/user.service';
import { CartService } from '../../_services/index';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any[]= [];
  cartProduct: any;
  addedProduct: any;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
        .switchMap((params: ParamMap) => this.productService.getProduct(params.get('id')))
        .subscribe(td => this.product =  td.product[0]);
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

  goBack(): void {
    this.location.back();
  }



}
