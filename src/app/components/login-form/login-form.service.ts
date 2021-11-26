import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginFormService {
  constructor(private http: HttpClient) {}

  postLogin(loginUrl: string, user: string, password: string) {
    return this.http
      .post(
        loginUrl,
        { user: user, password: password },
        { responseType: 'text' }
      )
      .pipe(
        catchError((x) => {
          console.log(x);
          throw 'Deu erro';
        })
      );
  }

  getInfo(loginUrl: string) {
    return this.http.get(loginUrl).pipe(
      catchError((x) => {
        console.log(x);
        throw 'Deu erro';
      })
    );
  }
}
