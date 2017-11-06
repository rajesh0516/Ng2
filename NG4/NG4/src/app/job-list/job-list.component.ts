import { Component } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {
  UserDetails:any;
  constructor(private userSvc:UserService/*,private _router:Router*/) {
    this.UserDetails = {}
  }

  registerUser() {
    this.userSvc.register(this.UserDetails);
  }
}
