// ./angular-client/src/app/product/product-list/product-list.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { CartService , CommonService} from '../../_services/index';
import { appConfig } from '../../app.config';
@Component({
  selector: 'app-productsingle',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.css']
})

export class ProductsingleComponent implements OnInit {
  @Input() productName;
  @Input() productPrice;
  @Input() productId;
  @Input() productImg;
  cartProduct: any;
  addedProduct: any;

  constructor(
    private cartService: CartService,
    private commonService: CommonService) { }

  ngOnInit(): void {

  }

  addtoCart(id) {
    this.commonService.getById(appConfig.productApi + id).subscribe(td => {
      this.addedProduct = td.product[0];
      this.cartService.cartItems.subscribe(res => this.cartProduct = res);
     const filterproduct = this.cartProduct.cart.filter(t => t._id === id);
     if (filterproduct.length === 0) {
      this.cartProduct.cart.push(this.addedProduct);
      // this.userService.update(this.cartProduct).subscribe(res => console.log(res));
     }else {
       alert('already added to cart');
     }
    });
  }
}
