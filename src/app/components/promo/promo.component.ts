import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css'],
})
export class PromoComponent implements OnInit {
  direction: string;
  title: string;
  image: string;
  text: string;
  type: string;

  constructor(private elementRef: ElementRef) {
    this.direction = this.elementRef.nativeElement.getAttribute('direction');
    this.title = this.elementRef.nativeElement.getAttribute('title');
    this.image = this.elementRef.nativeElement.getAttribute('image');
    this.text = this.elementRef.nativeElement.getAttribute('text');
    this.type = this.elementRef.nativeElement.getAttribute('type');
  }

  ngOnInit(): void {}
}
