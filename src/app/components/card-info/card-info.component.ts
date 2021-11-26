import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {
  @Input() img: string ='';
  @Input() titleImg: string ='';
  @Input() relevance: string ='';
  @Input() year: string ='';
  @Input() minAge: string ='';
  @Input() time: string ='';
  @Input() description: string ='';
  @Input() cast: string ='';
  @Input() genre: string ='';
  @Input() scenes: string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
