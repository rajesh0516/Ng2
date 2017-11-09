import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginServiceComponent} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent  {

  constructor(private router: Router, private loginService: LoginServiceComponent ) {
  }

  onSubmit(formData: NgForm) {
    console.log(formData.value.username);
    this.loginService.setLoginData(formData.value.username);
    this.router.navigate(["home"]);
  }


}
