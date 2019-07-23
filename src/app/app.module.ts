import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from "./materials";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { DesignationsComponent } from './designations/designations.component';
import { AddDesignationsComponent } from './add-designations/add-designations.component';
import 'hammerjs';
import { PracticeTopicComponent } from './practice-topic/practice-topic.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    MainNavComponent,
    DashboardComponent,
    CreateServiceComponent,
    DesignationsComponent,
    AddDesignationsComponent,
    PracticeTopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddDesignationsComponent]
})
export class AppModule { }
