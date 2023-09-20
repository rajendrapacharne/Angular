import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AuthUserModule} from './auth-user/auth-user.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

import { StudentListComponent } from './student-list/student-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    StudentListComponent,
    CountryListComponent,
    HeaderComponent,
   
  ],
  imports: [
    BrowserModule,
    AuthUserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
