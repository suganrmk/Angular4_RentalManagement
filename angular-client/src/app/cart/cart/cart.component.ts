// ./angular-client/src/app/home.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { CartService, UserService } from '../../_services/index';
@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

    cartItems: any[];
    cartProduct: any;

    constructor(private productService: ProductService, private cartService: CartService, private userService: UserService) { }

    ngOnInit(): void {
        this.getcartItems();
    }

    remove(id) {
        const filterproduct = this.cartProduct.cart.filter(t => t._id !== id);
        this.cartProduct.cart = filterproduct;
        this.userService.update(this.cartProduct).subscribe(res => {
            this.getcartItems();
        });

    }

    getcartItems() {
        this.cartService.getById('5a3ea24f049feb2bd08934ce').subscribe(res => {
            this.cartService.cartItems.next(res);
        });

        this.cartService.cartItems.subscribe(res => {
            if (res) {
                this.cartProduct = res;
                this.cartItems = res.cart;
            }
        });
    }
}
