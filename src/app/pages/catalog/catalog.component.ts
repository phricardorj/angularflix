import { Component, OnInit } from '@angular/core';
import { LoginFormService } from 'src/app/components/login-form/login-form.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  constructor(private loginFormService: LoginFormService) {}
  show = false;
  loading = false;
  cards: any = {};
  serie: any = {};
  popular: any = {};
  keepWatching: any = {};
  url: string = 'https://private-3923c4-santandercoders809.apiary-mock.com/';

  ngOnInit() {
    this.loading = true;
    this.loginFormService.getInfo(`${this.url}${'users/1'}`).subscribe((x) => {
      this.cards = x;
      this.loading = false;
      this.popular = this.cards['popular'];
      this.keepWatching = this.cards['keepWatching'];
      // console.log(this.popular);
      // console.log(this.keepWatching);
    });
  }

  showInfo(value: string) {
    this.loginFormService.getInfo(`${this.url}${'series/'}${value}`).subscribe((x) => {
      this.serie = x;
      // console.log(this.serie);
      console.log(this.serie['backgroundImage']);
      console.log(this.serie['titleImage']);
      console.log(this.serie['relevance']);
      console.log(this.serie['year']);
      console.log(this.serie['minAge']);
      console.log(this.serie['time']);
      console.log(this.serie['description']);
      console.log(this.serie['cast']);
      console.log(this.serie['genre']);
      console.log(this.serie['scenes']);
    });

    this.show = true;
  }

  close() {
    this.serie = {};
    this.show = false;
  }
}
