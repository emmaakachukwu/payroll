import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string;
  showProgress: boolean = false;

  constructor(
    private data: DataService,
    private nav: Router,
    private cookie: CookieService
  ) { }

  ngOnInit() {
  }


  submit(a) {
    let pload = {
      email: a.value.email,
      password: a.value.password,
      key: '02'
    }
    this.showProgress = true;
    this.data.postMethod(pload).subscribe(
      data => {
        console.log(data);
        if ( data['code'] != '00' ) {
          this.error = data['message'];
          this.showProgress = false;
        } else if ( data['message'] == 0 ) {
          let body = {
            email: a.value.email,
            key: "04"
          }
          this.data.postMethod(body).subscribe(
            fetch => {
              console.log(fetch);
              localStorage.setItem('sid', fetch['message'].service_id);
            }
          )
          this.cookie.set("user", data['cookie']);
          this.nav.navigate(['/main-nav/create-service']);
        } else {
          let body = {
            email: a.value.email,
            key: "04"
          }
          this.data.postMethod(body).subscribe(
            fetch => {
              console.log(fetch);
              localStorage.setItem('sid', fetch['message'].service_id);
            }
          )
          this.cookie.set("user", data['cookie']);
          this.nav.navigate(['/main-nav/dashboard']);
        }
      }
    )
  }

}
