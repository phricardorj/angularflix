import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css'],
})
export class CardInfoComponent implements OnInit {
  @Input() img: String | undefined = '';
  @Input() titleImg: String | undefined = '';
  @Input() relevance: number | undefined = 0;
  @Input() year: number | undefined = 0;
  @Input() minAge: number | undefined = 0;
  @Input() time: number | undefined = 0;
  @Input() description: String | undefined = '';
  @Input() cast: String | String[] | undefined = '';
  @Input() genre: String | String[] | undefined = '';
  @Input() scenes: String | String[] | undefined = '';

  constructor() {}

  ngOnInit(): void {}
}
