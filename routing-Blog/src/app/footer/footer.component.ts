import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  memberData=[
    {Name :'Rajendra', Email : 'Rajendra@email.com',phone :9876 ,UserAccounts:['Facebook','Gmail','Whatsapp']},
    {Name :'Raj', Email : 'Raj@email.com',phone :9876 ,UserAccounts:['Instagram','Gmail','Google']},
    {Name :'Bheem', Email : 'Bheem@email.com',phone :9876,UserAccounts:['Apple','Samsung ','Whatsapp'] },
    {Name :'Tom', Email : 'Tom@email.com',phone :9876 ,UserAccounts:['Yahoo','Gmail','Telegram']},
    {Name :'jerry', Email : 'jerry@email.com',phone :9876 ,UserAccounts:['Twitter','bard','ChatGpt']},

  ];
}
