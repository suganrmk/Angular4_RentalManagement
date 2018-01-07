import { Component, OnInit } from '@angular/core';
import { CommonServices } from '../provider/common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any = {};
  index: number = 0;
  
  constructor(private commonServices: CommonServices) { }

  ngOnInit() {
  }

  openNext() {
    this.index = (this.index === 2) ? 0 : this.index + 1;
  }

  openPrev() {
    this.index = (this.index === 0) ? 2 : this.index - 1;
  }
  onSubmitSlider(data) {
    this.commonServices.create('/route/products', data).subscribe(res => console.log(res));
  }

}
