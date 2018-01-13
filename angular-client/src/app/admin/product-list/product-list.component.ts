// ./angular-client/src/app/product/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';

import { ProductService } from '../provider/product.service';
import { CommonServices } from '../provider/common.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // product: any = {};
  products: any[] = [];

  selectedRow: any;

  constructor(private productService: ProductService ,  private commonServices: CommonServices) { 
     }

  ngOnInit(): void {
    this.commonServices.getAll('/product').subscribe(td => { this.products = td.products;   console.log(this.products) });
  
  }

  onDeleteSlider(val) {
    this.commonServices.delete('/product/' + val._id).subscribe(res => {
      const index = this.findSelectedRowIndex();
      this.products = this.products.filter((data, i) => i !== index);
    });
  }
  findSelectedRowIndex(): number {
    return this.products.indexOf(this.selectedRow);
  }


}
