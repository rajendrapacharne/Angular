import { Component } from '@angular/core';
import {UserDataService} from './services/user-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-Blog';
  // memberData=[
  //   {Name :'Rajendra', Email : 'Rajendra@email.com',phone :9876 ,UserAccounts:['Facebook','Gmail','Whatsapp']},
  //   {Name :'Raj', Email : 'Raj@email.com',phone :9876 ,UserAccounts:['Instagram','Gmail','Google']},
  //   {Name :'Bheem', Email : 'Bheem@email.com',phone :9876,UserAccounts:['Apple','Samsung ','Whatsapp'] },
  //   {Name :'Tom', Email : 'Tom@email.com',phone :9876 ,UserAccounts:['Yahoo','Gmail','Telegram']},
  //   {Name :'jerry', Email : 'jerry@email.com',phone :9876 ,UserAccounts:['Twitter','bard','ChatGpt']},

  // ];
  // users:any;
  // constructor(private userData:UserDataService)
  // {
  //   console.warn('usedata',userData.users());
  //   this.users=userData.users();
  // }


  users:any;
  constructor(private userData:UserDataService)
  {
    userData.users().subscribe((data)=>{
    console.warn('data',data);
    this.users=data });
     
    
    
  }
  getUserFormData(data:any)
  {
      // console.warn('Data',data);
      this.userData.saveUsers(data).subscribe((result)=>
      {
      console.warn(result);
      }
      )
  }

}
