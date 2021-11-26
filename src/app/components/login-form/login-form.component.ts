import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginFormService } from '../login-form/login-form.service';

interface LoginData {
  token?: String;
  users?: Array<Users>;
}

interface Users {
  id: number;
  name: String;
  avatarUrl: String;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private loginFormService: LoginFormService,
    private router: Router
  ) {}

  ngOnInit() {}

  showMore = false;
  toggleShowMore() {
    this.showMore = !this.showMore;
  }

  url: string =
    'https://private-3923c4-santandercoders809.apiary-mock.com/login';
  loginData: LoginData | unknown | string = {};
  user: string = '';
  password: string = '';
  userIsValid: string = '';

  postLogin(user: string, password: string) {
    return new Promise((resolve) => {
      this.loginFormService
        .postLogin(this.url, user, password)
        .subscribe((data) => resolve(data));
    });
  }

  async onSubmit() {
    const user = this.loginForm.get('user')?.value;
    const password = this.loginForm.get('password')?.value;

    if (!user.includes('@')) {
      let validPhone = false;
      for (let i = 0; i < user.length - 1; i++) {
        if (user[i] !== user[i + 1]) validPhone = true;
      }
      if (!/^\d+$/.test(user)) validPhone = false;
      if (user.length > 11) validPhone = false;
    }

    this.loginFormService
      .postLogin(this.url, user, password)
      .subscribe((data) => {
        this.loginData = data;
        console.log(this.loginData);
      });

    this.loginData = await this.postLogin(user, password);

    const token = JSON.parse(`${this.loginData}`).token;
    localStorage.setItem('token', token);
    localStorage.setItem('users', `${this.loginData}`);

    this.checkIfUserIsValid(user, password);
  }

  checkIfUserIsValid(user: string, password: string) {
    const validUsers = {
      email: 'squad8@letscode.com',
      phone: '21912345678',
      password: '123456',
    };
    if (
      (user === validUsers.email || user === validUsers.phone) &&
      password === validUsers.password
    )
      this.router.navigate(['/profiles']);
  }
}
