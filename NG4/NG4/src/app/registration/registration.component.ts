import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 UserDetails:any;
    constructor(private userSvc:UserService) {
    this.UserDetails={ }
  }

  ngOnInit() {  }
  registerNextUser(){
      this.userSvc.register(this.UserDetails);
    //console.log(this.UserDetails);
  }
  test(){
    console.log("key pressed");
  }
}
