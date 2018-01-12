// ./angular-client/src/app/home.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService, CommonService } from '../../_services/index';
@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

    cartItems: any[];
    cartProduct: any;

    constructor( private cartService: CartService, private commonService: CommonService) { }

    ngOnInit(): void {
    }

}
