import {Routes,  RouterModule} from "@angular/router";

import {RegisterComponent} from './register/index';
import {JobdetailComponent} from './jobdetail/index';
import {AuthGuard} from './_guards/index';


const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'jobdetail', component: JobdetailComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
