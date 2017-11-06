import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { JobListComponent }from './job-list/job-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';

//import {JobService} from "./services/job.service";
import {UserService} from "./services/user.service";
import { HomeComponent } from './home/home.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    LoginComponent,
    RegistrationComponent,
    JobListComponent,
    JobDetailsComponent,
    HomeComponent,
    EmployeeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{path:"home",component:HomeComponent},{path:"register",component:RegistrationComponent},
      {path:"jobs",component:JobListComponent
      }]),
    HttpModule
  ],
  providers: [UserService
              ],
  bootstrap: [AppComponent]
})
export class AppModule {  }
