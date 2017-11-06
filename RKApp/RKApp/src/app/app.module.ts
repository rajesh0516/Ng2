import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { RegisterComponent } from './register/index';
import { LogoComponent } from './logo/logo.component';
import {RouterModule} from '@angular/router';

import { JobdetailComponent } from './jobdetail/index';

import  {UserService} from './services/user.service';
import { routing }        from './app.routing';
import { AuthGuard } from './_guards/index';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    RegisterComponent,
    LogoComponent,

    JobdetailComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    RouterModule.forRoot([{path:"register",component:RegisterComponent},{path:"jobdetail",component:JobdetailComponent}
      ])
  ],
  providers: [UserService,AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
