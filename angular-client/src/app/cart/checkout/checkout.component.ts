// ./angular-client/src/app/home.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { CartService, UserService } from '../../_services/index';
@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

    cartItems: any[];
    cartProduct: any;

    constructor(private productService: ProductService, private cartService: CartService, private userService: UserService) { }

    ngOnInit(): void {
    }

}
