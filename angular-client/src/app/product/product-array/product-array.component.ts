// ./angular-client/src/app/product/product-list/product-list.component.ts
import { Component, OnInit , Input } from '@angular/core';



@Component({
  selector: 'app-productarray',
  templateUrl: './product-array.component.html'
})

export class ProductarrayComponent implements OnInit {

  @Input() product ;


  constructor() { }

  ngOnInit(): void {
  }


}
