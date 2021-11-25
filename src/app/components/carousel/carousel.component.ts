import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  cards: any;

  constructor(private elementRef: ElementRef) {
    this.cards = this.elementRef.nativeElement.getAttribute('cards');
  }

  ngOnInit(): void {
  }

}
