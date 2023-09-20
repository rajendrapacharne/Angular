import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  displayVal:string='';

  getName(name:any){
    alert(name);
  }
  getData(val:string){
    console.warn(val);
  }
  
  getValue(val:any)
  {
    console.warn(val);
    this.displayVal=val;
  }
  count=0;
  counter(type:string)
  {
    type=='add'? this.count++: this.count--;
  }

  show=true;
  color='xyz';
  users=['Rajendra','Raj','Bheem','Tom','jerry'];
  userDetails=[
    {Name :'Rajendra', Email : 'Rajendra@email.com',phone :9876 ,UserAccounts:['Facebook','Gmail','Whatsapp']},
    {Name :'Raj', Email : 'Raj@email.com',phone :9876 ,UserAccounts:['Instagram','Gmail','Google']},
    {Name :'Bheem', Email : 'Bheem@email.com',phone :9876,UserAccounts:['Apple','Samsung ','Whatsapp'] },
    {Name :'Tom', Email : 'Tom@email.com',phone :9876 ,UserAccounts:['Yahoo','Gmail','Telegram']},
    {Name :'jerry', Email : 'jerry@email.com',phone :9876 ,UserAccounts:['Twitter','bard','ChatGpt']},

  ];
  bgcolor="pink";
  color2="green";
  updatedcolor()
  {
    this.color2='red';
    this.bgcolor='aqua';
  }
}

