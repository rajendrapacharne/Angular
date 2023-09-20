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
  color='blue';
}

