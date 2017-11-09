import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginServiceComponent} from './login.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {Routes , RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
