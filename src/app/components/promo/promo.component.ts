import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css'],
})
export class PromoComponent implements OnInit {
  @Input() direction = '';
  @Input() title = '';
  @Input() image = '';
  @Input() text = '';

  constructor() {}

  ngOnInit(): void {}
}
