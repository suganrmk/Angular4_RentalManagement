// ./angular-client/src/app/product/product-detail/product-detail.component.ts
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { CartService , CommonService} from '../../_services/index';
import { appConfig } from '../../app.config';


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
    private commonService: CommonService,
    private route: ActivatedRoute,
    private location: Location,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
    console.log(params.id)
    this.commonService.getById( appConfig.productApi + params.id).subscribe(td =>{
           this.product =  td.product[0];
           console.log(this.product)
    });
    });
    // this.route.paramMap
    //     .switchMap((params: ParamMap) =>  
    //      console.log( params.get('id'))
    //      params.get('id')
    //     // this.commonService.getById( appConfig + ).subscribe(td =>
    //     //    this.product =  td.product[0]
    //     // );
    //     });
    }
  addtoCart(id) {
    this.commonService.getById(id).subscribe(td => {
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

  goBack(): void {
    this.location.back();
  }



}
