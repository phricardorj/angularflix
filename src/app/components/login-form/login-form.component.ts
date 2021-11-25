import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Response {
  token: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})

export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(60),
    ]),
  });

  showMore = false;
  toggleShowMore() {
    this.showMore = !this.showMore;
  }

  response: Response = { token: '' };
  onSubmit() {
    if (this.loginForm.valid) {
      this.http
        .post<any>(
          'https://private-3923c4-santandercoders809.apiary-mock.com/login',
          {}
        )
        .subscribe((data) => {
          this.response = data;
          localStorage.setItem('token', this.response.token);
          this.router.navigate(['catalog']);
        });
    }
  }

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}
}
