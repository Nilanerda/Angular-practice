import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  i: number = 0;
  currentImg: string;
  currentText: string;
  currentTitle: string;
  constructor() { }
  slidesData = [
    {title: 'h1 title 1', text: 'some text for slide 1', image:'https://media.wired.com/photos/5c1ae77ae91b067f6d57dec0/master/w_2560%2Cc_limit/Comparison-City-MAIN-ART.jpg'},
    {title: 'h1 title 2', text: 'some text for slide 2', image:'https://media.wired.com/photos/5c1ae525da84021ed9889554/master/w_1600%2Cc_limit/Compare-1-nightsight_iPhoneXSMax-Google.jpg'},
    {title: 'h1 title 3', text: 'some text for slide 3', image:'https://eoimages.gsfc.nasa.gov/images/imagerecords/145000/145619/spaindolmen_oli_2013205.jpg'}
    ];
  ngOnInit() {
    this.currentImg = this.slidesData[0].image;
    this.currentText = this.slidesData[0].text;
    this.currentTitle = this.slidesData[0].title;
  }

  next(){
    this.i++;
    if (this.i >= this.slidesData.length) {
      this.i = 0;
    }
    this.currentImg = this.slidesData[this.i].image;
    this.currentText = this.slidesData[this.i].text;
    this.currentTitle = this.slidesData[this.i].title;
  }
  prev(){
    this.i--;
    if (this.i < 0) {
      this.i = this.slidesData.length - 1;
    }
    this.currentImg = this.slidesData[this.i].image;
    this.currentText = this.slidesData[this.i].text;
    this.currentTitle = this.slidesData[this.i].title;
  }
}
