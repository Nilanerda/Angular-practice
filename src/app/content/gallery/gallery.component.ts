import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery: string[] = [
    'https://media.wired.com/photos/5c1ae77ae91b067f6d57dec0/master/w_2560%2Cc_limit/Comparison-City-MAIN-ART.jpg',
    'https://media.wired.com/photos/5c1ae525da84021ed9889554/master/w_1600%2Cc_limit/Compare-1-nightsight_iPhoneXSMax-Google.jpg',
    'https://eoimages.gsfc.nasa.gov/images/imagerecords/145000/145619/spaindolmen_oli_2013205.jpg'
  ];
  i: number = 0;
  currentImg: string;
  constructor() { }

  ngOnInit() {
    this.currentImg = this.gallery[0];
  }

  next(){
    this.i++;
    if (this.i >= this.gallery.length) {
      this.i = 0;
    }
    this.currentImg = this.gallery[this.i];
    console.log('next' + this.i)
  }
  prev(){
    this.i--;
    if (this.i < 0) {
      this.i = this.gallery.length - 1;
    }
    this.currentImg = this.gallery[this.i];
    console.log('prev' + this.i)
  }
}
