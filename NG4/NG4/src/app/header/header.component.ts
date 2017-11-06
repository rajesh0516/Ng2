import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Tabs:Array<any>;
  constructor() {
   /* this.Tabs=[{name:"home",display:"Home"},
      {name:"register",display:"Register"},
      {name:"jobs",display:"Jobs"}]
  }*/

  this.Tabs=[{name:"jobs",display:"CurrentEmpolyeeDetails"},
    {name:"register",display:"PreviousEmpolyeeDetails"},{name:"home",display:"EmployeeDetais"}]
}

  ngOnInit() {
  }

}
