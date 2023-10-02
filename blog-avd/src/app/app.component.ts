import { Component,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-avd';

  constructor(private viewContainer:ViewContainerRef,private cfr:ComponentFactoryResolver)
  {

  }
  async loadAdmin()
  {
    this.viewContainer.clear();
    const {LoginComponent} = await import ("./admin/login/login.component");
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(LoginComponent)
    )
  }
  async loadUser()
  {
    this.viewContainer.clear();
    const {LoginComponent} =await import ("./user/login/login.component");
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(LoginComponent)
    )
  }
}
