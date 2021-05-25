import { AuthService } from './../../services/auth/auth.service';
import { ProfessionnalService } from 'src/app/services/professionnal/professionnal.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Professionnal } from 'src/app/models/professionnal.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;
  authSub: Subscription;
  proAccountUrl: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.authSub = this.authService.isAuth.subscribe(
      (newIsAuth: boolean) => this.isAuth = newIsAuth
    );

    console.log(this.isAuth);

    if (this.isAuth) {
      this.proAccountUrl = "http://localhost:4200/pro-account";
    }
    else {
      this.proAccountUrl = "http://localhost:4200/auth";
    }

    console.log(sessionStorage.getItem('token'));

    //   Another dynamique way to adapt proAccountUrl according to authentification status, without Subscription :

    //  let userToken = sessionStorage.getItem('token');
    //  if(userToken){
    //    let proAccountUrl = "http://localhost:4200/pro-account"
    // }
    // else {
    //   let proAccountUrl = "http://localhost:4200/auth";
    // }

  }

}
