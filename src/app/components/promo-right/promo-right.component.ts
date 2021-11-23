import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-promo-right',
  templateUrl: './promo-right.component.html',
  styleUrls: ['./promo-right.component.css']
})
export class PromoRightComponent implements OnInit {
  title: string;
  image: string;
  text: string;
  type: string;

  constructor(private elementRef: ElementRef) {
    this.title = this.elementRef.nativeElement.getAttribute('title');
    this.image = this.elementRef.nativeElement.getAttribute('image');
    this.text = this.elementRef.nativeElement.getAttribute('text');
    this.type = this.elementRef.nativeElement.getAttribute('type');
  }

  ngOnInit(): void {
  }

}
