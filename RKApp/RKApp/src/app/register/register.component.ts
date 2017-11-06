import { Component } from '@angular/core';
//import { Component, View, bootstrap,  bind } from 'angular2/angular2';
import {UserService} from '../services/user.service';
//import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import {validate} from "codelyzer/walkerFactory/walkerFn";
//import {Component,View} from 'angular2/core';
//import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],


})
export class RegisterComponent{
  UserDetails:any;
  private isTrue:boolean = false;
  private isSecondPagevisible:boolean = false;

  constructor(private userSvc:UserService/*,private _router:Router*/) {
    this.UserDetails = {}
  }

  registerUser(){
    this.isTrue = true;
    this.userSvc.register(this.UserDetails);



    // this._router.navigate(['jobdetail'])
     //this.router.navigate(['/']);
   // console.log(this.Details)
  }
  registerNextUser(){
    this.isSecondPagevisible = true;

  }
  clickOnPreviousUsr(){
    this.isTrue = false;
    this.isSecondPagevisible = false;
  }
  closeUser(){
    this.isTrue = false;
    this.isSecondPagevisible = true;
  }
}
