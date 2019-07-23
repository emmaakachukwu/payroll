import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  error: string;
  showProgress: boolean = false;

  constructor(
    private data: DataService,
    private route: Router,
    private cookie: CookieService
  ) { }

  ngOnInit() {
  }

  submit(a) {
    let pload = {
      email: a.value.email,
      password: a.value.password,
      confirm_password: a.value.cpassword,
      key :'01'
    }
    this.showProgress = true;
    this.data.postMethod(pload).subscribe(
      data => {
        console.log(data);
        if ( data['code'] != '00' ) {
          this.error = data['message'];
          this.showProgress = false;
        } else {
          this.cookie.set("user", data['cookie']);

          let body = {
            email: a.value.email,
            key: "04"
          }

          this.data.postMethod(body).subscribe(
            data => {
              console.log(data);
              if (data['code'] != "00") {
                console.log(data['message']);
              } else {
                localStorage.setItem("uid", data['message'].service_id);
              }
            }
          );
          
          this.route.navigate(['/main-nav/create-service']);
        }
      }
    )
  }
}
