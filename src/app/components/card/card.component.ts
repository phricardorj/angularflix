import { Component, Input, OnInit } from '@angular/core';
import { LoginFormService } from 'src/app/components/login-form/login-form.service';

interface Series {
  backgroundImage?: String;
  cardImage?: String;
  cast?: Array<String>;
  description?: String;
  genre?: Array<String>;
  minAge?: number;
  relevance?: number;
  scenes?: Array<String>;
  season?: number;
  time?: null;
  titleImage?: String;
  year?: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() text: number = 0;
  url: string =
    'https://private-3923c4-santandercoders809.apiary-mock.com/series/';
  serie: Series = {};
  image?: String = '';
  property: number = 0;

  constructor(private loginFormService: LoginFormService) {}

  ngOnInit() {
    this.loginFormService.getInfo(`${this.url}${this.text}`).subscribe((x) => {
      this.serie = x;
      const myvar = this.serie['cardImage'];
      this.image = this.serie['cardImage'];
    });
  }
}
