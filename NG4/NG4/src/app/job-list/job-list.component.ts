import { Component } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {
  UserDetails:any;
  constructor(private userSvc:UserService, private _router:Router) {
    this.UserDetails = {}
  }

  form2:boolean;
  registerUser() {
    this.userSvc.register(this.UserDetails);
    //this.userSvc.enableForms();
    this.form2=true;
    console.log(this.UserDetails);
    this.userSvc.saveData(this.UserDetails).subscribe(
      ()=>console.log("Saved......."),
      ()=>console.log("Error Happened.......")
    );
    this.userSvc.Enableform.next("F2");
    this._router.navigate(['register']);
  }
}
