// ./angular-client/src/app/home.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';

import { CommonService } from '../_services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {
  products: any[] = [];
  bannerImg: string;
  cars: any[]
  constructor( private commonService: CommonService) { }

  ngOnInit(): void {
    document.body.classList.add('home');

    this.commonService.getAll('/product/test/homeSliders').subscribe((res) => {
      console.log(res);
      this.bannerImg = res.homesliders;
    });

 

  }
  ngOnDestroy() {
    document.body.classList.remove('home');
  }
}
