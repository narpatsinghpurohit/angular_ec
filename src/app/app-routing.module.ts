import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NonepageComponent } from './nonepage/nonepage.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'**',
        component:NonepageComponent
      }
    ])
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
