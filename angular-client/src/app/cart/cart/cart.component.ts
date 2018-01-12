// ./angular-client/src/app/home.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService, CommonService } from '../../_services/index';
@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

    cartItems: any[] = [];
    cartProduct: any;

    constructor(
                private cartService: CartService, private commonService: CommonService) { }

    ngOnInit(): void {
        this.getcartItems();
    }

    remove(id) {
        const filterproduct = this.cartProduct.cart.filter(t => t._id !== id);
        this.cartProduct.cart = filterproduct;
        this.commonService.update('/users/5a3ea24f049feb2bd08934ce' , this.cartProduct).subscribe(res => {
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
