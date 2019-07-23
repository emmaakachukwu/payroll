import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DesignationsComponent } from '../designations/designations.component';
import { DataService } from '../data.service'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-designations',
  templateUrl: './add-designations.component.html',
  styleUrls: ['./add-designations.component.css']
})
export class AddDesignationsComponent implements OnInit {
  error: string;

  constructor(
    public dialogref: MatDialogRef<DesignationsComponent>,
    private data: DataService,
    private cookie: CookieService
  ) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogref.close();
  }

  submit(a) {
    let pload = {
      grade: a.value.grade,
      level: a.value.level,
      pay: a.value.pay,
      cookie: this.cookie.get('user'),
      sid: localStorage.getItem('sid'),
      key: "05"
    }

    this.data.postMethod(pload).subscribe(
      data => {
        console.log(data);
        if ( data['code'] != '00' ) {
          this.error = data['message'];
        } else {
          this.dialogref.close();
        }
      }
    )
  }

}
