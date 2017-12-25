// ./angular-client/src/app/home.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { CartService } from '../../_services/index';
@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

    cartItems: any[] = [];
    constructor(private productService: ProductService, private cartService: CartService) { }

    ngOnInit(): void {
        this.cartService.getById('5a3ea24f049feb2bd08934ce').subscribe(res => {
            this.cartItems = res.cart;
            this.cartService.cartItems.next(res);
        });
    }

    remove(id) {
     console.log(id);
    }
}
