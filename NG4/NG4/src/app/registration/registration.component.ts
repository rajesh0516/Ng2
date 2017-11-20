import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 UserDetails:any;
    constructor(private userSvc:UserService,private router:Router) {
    this.UserDetails={ }
  }

  ngOnInit() {  }
  registerNextUser(){
      this.userSvc.register(this.UserDetails);
      this.userSvc.Enableform.next("F3");
      //this.router.navigate(['home']);
    // this.userSvc.saveData().subscribe(
    // ()=>console.log("Saved....."),
    //   ()=>console.log("Some...Error....")
    // );

    //console.log(this.UserDetails);
  }
  test(){
    console.log("key pressed");
  }
}
