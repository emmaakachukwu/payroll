import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { DesignationsComponent } from './designations/designations.component';
import { AddDesignationsComponent } from './add-designations/add-designations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'main-nav', component: MainNavComponent, children: [
    { path: 'create-service', component: CreateServiceComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'designations', component: DesignationsComponent, children: [
      { path: 'dialog', component: AddDesignationsComponent }
    ] },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
