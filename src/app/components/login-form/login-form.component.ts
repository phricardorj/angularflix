import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginFormService } from '../login-form/login-form.service'

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

  constructor(private loginFormService: LoginFormService) {}

  showMore = false;
  toggleShowMore() {
    this.showMore = !this.showMore;
  }

  url: string = 'https://private-3923c4-santandercoders809.apiary-mock.com/login';
  loginData: any = {};
  user: string = '';
  password: string = '';
  userIsValid: string = '';

  postLogin(user: string, password: string) {
    return new Promise(resolve => {
      this.loginFormService.postLogin(this.url, user, password)
        .subscribe(data => resolve(data))
    })
  }

  async onSubmit() {
    const user = this.loginForm.get('user')?.value
    const password = this.loginForm.get('password')?.value

    this.loginFormService.postLogin(this.url, user, password)
      .subscribe((data) => this.loginData = data);

    this.loginData = await this.postLogin(user, password);

    const token = JSON.parse(this.loginData).token;
    localStorage.setItem('token', token);

    this.checkIfUserIsValid(user, password)

    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
  }

  checkIfUserIsValid(user: string, password: string) {
    const users = JSON.parse(this.loginData).users
    const id = parseInt(user.replace(/[^0-9]/g,''));

    users.forEach((user: any) => {
      if(user.id === id) this.userIsValid = 'Usuário válido'
        else this.userIsValid = 'Usuário inválido'
    });

    console.log(this.userIsValid)
  }

  ngOnInit() {
  }
}
