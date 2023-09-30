import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';

import {LoginComponent} from './users/login/login.component';
import {SignupComponent} from './users/signup/signup.component';
const routes: Routes = [
  // {
  //   path:'login',component:LoginComponent
  //   // path:'about',
    
  //   // component:AboutComponent,
  //   // children:[
  //   //   {path:'company',component:AboutCompanyComponent},
  //   //   {path:'me',component:AboutMeComponent}
  //   // ]
  // },
  // {
  //   path:'signup',component:SignupComponent
  // }
  // {
  //   path:'',
  //   component:HomeComponent
  // },
  // {
  //   path:'user/:id',
  //   component:UserComponent
  // },
  // {
  //   component:NoPageComponent,
  //   path:'**'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
