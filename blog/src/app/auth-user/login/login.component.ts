import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userdata:any={};
  getData(data:NgForm)
  {
    console.warn(data);
    this.userdata=data;
  }

}
