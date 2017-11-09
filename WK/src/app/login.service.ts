import {Http} from '@angular/http';
import {Component} from '@angular/core';

@Component({
  selector: 'app-service',
  template: ``,
})


export class LoginServiceComponent {
  // data: any = '';
  // constructor(private http : Http){
  //   this.http.get('data/data.json')
  //     .subscribe(res => this.data = res.json());
  // }
  loginUser: any = '';
  setLoginData(uname: string) {
    this.loginUser = uname;
  }
  getLoginDetails() {
    return this.loginUser;
  }
}
