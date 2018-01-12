import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CommonServices } from '../provider/common.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  sliderData: any[];
  display: boolean = false;
  userform: FormGroup;
  sliders: any = {};
  imagePreview:any;
  constructor(private fb: FormBuilder, private commonServices: CommonServices) { }

  ngOnInit() {
    this.commonServices.getAll('/route/slider').subscribe((res) => {
      this.sliderData = res.homesliders;
      console.log(res);
    });
  }

  onBasicUpload(ev) {
    this.imagePreview = ev.files[0].objectURL.changingThisBreaksApplicationSecurity;
    const uploadedImg = JSON.parse(ev.xhr.response).file[0];
    this.sliders.sliderImage = uploadedImg;
  }

  showDialog(data) {
    if (data) {
      this.sliders = data;
    } else {
      this.sliders = {};
    }
    this.display = true;
  }
  onSubmitSlider({value}) {
   const data = this.sliders;
   console.log(data);
    this.display = false;
    if (data._id) {
      this.updateSlider(data);
    } else {
      this.addSlider(data);
    }
  }
  updateSlider(val) {
    this.commonServices.update('/route/slider', val).subscribe(res => {
      console.log(res);
    });
  }
  addSlider(val) {
    this.commonServices.create('/route/slider', val).subscribe(res => {
      console.log(res);
    });
  }
  onDeleteSlider(val) {
    this.commonServices.delete('/route/slider/' + val._id).subscribe(res => {
      console.log(res);
    });
  }

}
