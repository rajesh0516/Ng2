import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
 CompanyName:string;
  constructor() {
    this.CompanyName = "Registration Form";
  }

  ngOnInit() {
  }

}
