import {Injectable} from '@angular/core'
import {Http} from '@angular/http';

@Injectable()
export class UserService{
  constructor(private http:Http){

  }
  register(userData){
    console.log(userData);

  }
  login(){

  }
  logOut(){

  }
}
