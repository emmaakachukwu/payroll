import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {

  error: string;
  urlError: string;

  progressBar: boolean;

  constructor(
    private data: DataService,
    private nav: Router,
    private cookie: CookieService
  ) { }

  ngOnInit() {
    this.data.currentmessage.subscribe(progressBar => this.progressBar = progressBar);
  }

  submit(a) {
    this.data.changeMessage(true);
    let whitespace = /\s/;
    let charset = /^[A-Za-z0-9]+$/;
    if (whitespace.test(a.value.url)) {
      this.urlError = "URL cannot contain whitespace";
      this.data.changeMessage(false);
    }else if(!charset.test(a.value.url) && a.value.url != ""){
      this.urlError = "URL cannot contain special characters";
      this.data.changeMessage(false);
    }else{
      this.urlError = "";
      let pload = {
        url: a.value.url,
        service_name: a.value.name,
        address: a.value.address,
        phone: a.value.phone,
        cookie: this.cookie.get("user"),
        sid: localStorage.getItem('sid'),
        key: "03"
      }
  
      this.data.postMethod(pload).subscribe(
        data => {
          console.log(data);
          if (data['code'] != "00") {
            this.error = data['message'];
            this.data.changeMessage(false);
          } else {
            this.data.changeMessage(false);
            alert("service created successfully");
            this.nav.navigate(['main-nav/dashboard']);
          }
        }
      )
    }
    
  }

}