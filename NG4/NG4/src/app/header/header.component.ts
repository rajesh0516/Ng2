import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Tabs:Array<any>;
  form1Enb:boolean=true;
  form2Enb:boolean;
  form3Enb:boolean;
  constructor(private userSvc:UserService) {
   /* this.Tabs=[{name:"home",display:"Home"},
      {name:"register",display:"Register"},
      {name:"jobs",display:"Jobs"}]
  }*/
   this.userSvc.Enableform.subscribe(
      (enf:String)=>{
        console.log("Cameto......header");
        console.log("Identified data===="+enf);
        if(enf == "F2"){
          this.form2Enb=true;
          this.form1Enb=false;
          this.form3Enb=false;
        }
        else if(enf == "F3"){
          this.form2Enb=false;
          this.form1Enb=false;
          this.form3Enb=true;
        }
      }
      );
  this.Tabs=[{name:"jobs",display:"CurrentEmpolyeeDetails"},
    {name:"register",display:"PreviousEmpolyeeDetails"},{name:"home",display:"EmployeeDetais"}]
}

  ngOnInit() {
  }

}
