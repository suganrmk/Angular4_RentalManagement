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
  roomtype: any;
  accommodates: any;
  bathroom:any;
  ProductImages: any = [{
    originalname :"Koala.jpg"
  }];
  constructor(private commonServices: CommonServices) {
    this.propertytype = [
      { label: 'Property type', value: null },
      { label: 'Cabin', value: 'Cabin' },
      { label: 'Villa', value: 'Villa' },
      { label: 'Slip', value: 'Slip' }
    ];
    this.roomtype = [
      { label: 'Room type', value: null },
      { label: 'Private', value: 'Private' },
      { label: 'Shared', value: 'Shared' }
    ];
    this.bathroom = [
      { label: 'Bathroom', value: null },
      { label: 'Private', value: 'Private' },
      { label: 'Public', value: 'Public' },
      { label: 'Both', value: 'Both' }
    ];
    this.accommodates = [
      { label: 'Accommodates', value: null },
      { label: '1', value: '1' },
      { label: '2', value: '2' }
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
  onSubmitSlider({ value, valid }) {
    value.City = this.products.City;
    console.log(value);

   this.commonServices.create('/route/products', value).subscribe(res => console.log(res));
  }

  autoCompleteCallback1(event) {

    const list = event.data.address_components;
    for (let i in list) {
      let placetype = list[i].types;
      console.log(placetype)
      if (placetype.includes('neighborhood')) {
        this.products.Street1 = list[i].long_name;
      }
      if (placetype.includes('sublocality_level_1')) {
        this.products.Street2 = list[i].long_name;
      }
      if (placetype.includes('administrative_area_level_1')) {
        this.products.State = list[i].long_name;
      }
      if (placetype.includes('locality')) {
        this.products.City = list[i].long_name;
      }
      if (placetype.includes('country')) {
        this.products.Country = list[i].long_name;
      }
      if (placetype.includes('postal_code')) {
        this.products.Zipcode = list[i].long_name;
      }
    }
  }
  onBasicUpload(ev) {
    const uploadedImg = JSON.parse(ev.xhr.response).file[0];
    this.ProductImages.push(uploadedImg);
    this.products.Photos = this.ProductImages;
    
    console.log( this.products)
  }

}
