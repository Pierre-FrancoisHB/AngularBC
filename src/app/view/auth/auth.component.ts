import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  errorMsg: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmitSignIn(form: NgForm) {
    this.authService.signIn(form.value.inputEmail, form.value.inputPassword)

      .then(() => {
        this.router.navigate(['pro-account']);
      })

      .catch((errorMsg) => {
        this.errorMsg = errorMsg;
      });

  }

}
