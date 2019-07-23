import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject<boolean>(false);
  currentmessage = this.messageSource.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  changeMessage(progressBar: boolean){
    this.messageSource.next(progressBar);
  }
  
  postMethod ( payLoad) {
    return this.http.post ("http://localhost/payroll-app/payrollapi.php", JSON.stringify(payLoad));
  }
}
