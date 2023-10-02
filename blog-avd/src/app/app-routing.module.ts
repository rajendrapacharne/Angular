import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'admin',loadChildren:()=>import('./admin/admin-routing.module').then(mod=>mod.AdminRoutingModule)},
  {path:'user',loadChildren:()=>import('./user/user-routing.module').then(mod=>mod.UserRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
