import { Component, OnInit } from '@angular/core';
import { LoginFormService } from 'src/app/components/login-form/login-form.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  constructor(private loginFormService: LoginFormService) {}
  userId = '';
  loading = false;
  cards: any = {};
  popular: any = {};
  popular2: any = ['5', '6', '7'];
  keepWatching: any = {};
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
      console.log(this.popular);
      console.log(this.keepWatching);
    });
  }
}
