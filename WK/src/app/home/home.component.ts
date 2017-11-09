import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {LoginServiceComponent} from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  title: any = '';
  constructor(private loginService: LoginServiceComponent ) {
    this.title = this.loginService.loginUser;
  }

  ngOnInit() {
  }

}
