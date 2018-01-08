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
  propertytype: any;
  roomtype:any;
  accommodates:any;
  constructor(private commonServices: CommonServices) { 
    this.propertytype = [
      {label: 'Property type', value: null},
      {label: 'Cabin', value: 'Cabin'},
      {label: 'Villa', value: 'Villa'},
      {label: 'Slip', value: 'Slip'}
  ];
  this.roomtype = [
    {label: 'Room type', value: null},
    {label: 'Private', value: 'Private'},
    {label: 'Shared', value: 'Shared'}
];
this.accommodates = [
  {label: 'Accommodates', value: null},
  {label: '1', value: '1'},
  {label: '2', value: '2'}
];
  }

  ngOnInit() {
  }

  openNext() {
    this.index = (this.index === 2) ? 0 : this.index + 1;
  }

  openPrev() {
    this.index = (this.index === 0) ? 2 : this.index - 1;
  }
  onSubmitSlider({value, valid}) {
    value.City = this.products.City;
    console.log(value);

    // this.commonServices.create('/route/products', data).subscribe(res => console.log(res));
  }

  autoCompleteCallback1(event) {
    console.log(event.data);
     this.products.City = event.data;
     this.products.Country = 'india';
  }
  onBasicUpload(ev){
   const uploadedImg = JSON.parse(ev.xhr.response).file[0];
   this.products.Photos = uploadedImg;
  }

}
