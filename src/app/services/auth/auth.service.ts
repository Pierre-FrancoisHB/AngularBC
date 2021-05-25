import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string;

  isAuth: BehaviorSubject<boolean>;

  returnedToken: string;

  sessionStorage: Storage;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = 'http://localhost:8000/api';
    this.isAuth = new BehaviorSubject<boolean>(false);
  }

  signIn(inputEmail: string, inputPassword: string): Promise<void | string> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });


    return new Promise<void | string>(
      (res, rej) => {

        this.httpClient.post(

          this.apiUrl + '/login_check',
          {
            "username": inputEmail,
            "password": inputPassword
          },
          { headers: headers }
        )
          .subscribe(
            (response: any) => {
              this.isAuth.next(true);

              sessionStorage.setItem("token", response.token);
              this.returnedToken = sessionStorage.getItem("token");

              console.log(this.returnedToken);
              res();
            },
            errorReturn => rej('les identifiants ne sont pas les bons')
          );
      }
    )

  }

  signOut(): Promise<void> {

    return new Promise<void>(
      (res, rej) => {

        setTimeout(
          () => {
            this.isAuth.next(false);
            res();
          },
          2000
        )
      }
    )
  }


}
