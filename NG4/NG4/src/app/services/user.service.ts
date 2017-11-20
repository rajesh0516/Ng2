import {Injectable} from '@angular/core'
import {Http} from '@angular/http';
import  {Subject} from "rxjs/Subject";

@Injectable()
export class UserService{
  constructor(private http:Http){

  }

  Enableform=new Subject<String>();
  register(userData){
    console.log(userData);

  }
  login(){

  }
  logOut(){

  }
  // form2Flag:boolean;
  // enableForms(){
  //  this.form2Flag =true;
  //  this.Enableform.next(this.form2Flag);
  // }
  userData;
  saveData(obj:any){
    console.log(obj);

    this.userData=obj;
    console.log(this.userData);
    return this.http.post('https://registeremp-a6a18.firebaseio.com/Register.json',this.userData);
  }
}
