import { Component, OnInit } from '@angular/core';
import { LoginFormService } from 'src/app/components/login-form/login-form.service';

interface Cards {
  keepWatching?: Array<number>;
  popular?: Array<number>;
}

interface Series {
  cardImage?: String;
  titleImage?: String;
  backgroundImage?: String;
  relevance?: number;
  year?: number;
  minAge?: number;
  time?: number;
  season?: null;
  description?: String;
  cast?: Array<String>;
  genre?: Array<String>;
  scenes?: Array<String>;
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  constructor(private loginFormService: LoginFormService) {}
  show = false;
  serie: Series = {};
  userId = '';
  loading = false;
  cards: Cards = {};
  popular?: Array<number> = [];
  popular2 = ['5', '6', '7'];
  keepWatching?: Array<number> = [];
  url: string = 'https://private-3923c4-santandercoders809.apiary-mock.com/';

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    if (userId) this.userId = userId;

    this.loading = true;
    this.loginFormService.getInfo(`${this.url}users/1`).subscribe((x) => {
      this.cards = x;
      this.loading = false;
      this.popular = this.cards['popular'];
      this.keepWatching = this.cards['keepWatching'];
    });
  }

  showInfo(value: number) {
    this.loginFormService
      .getInfo(`${this.url}${'series/'}${value}`)
      .subscribe((x) => {
        this.serie = x;
      });

    this.show = true;
  }

  close() {
    this.serie = {};
    this.show = false;
  }
}
