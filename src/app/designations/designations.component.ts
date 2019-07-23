import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddDesignationsComponent } from '../add-designations/add-designations.component';
import { DataService } from '../data.service'
import { CookieService } from 'ngx-cookie-service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-designations',
  templateUrl: './designations.component.html',
  styleUrls: ['./designations.component.css']
})
export class DesignationsComponent implements OnInit {

  designations: any;
  displayedColumns: any;
  dataSource: any;
  clear: boolean;
  searchInput: string;
  pageSize: number = 10;
  pageIndex: number;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private data: DataService,
    private cookie: CookieService,
  ) { }

  onPaginateChange(event){
    alert(JSON.stringify("Current page index: " + event.pageIndex));
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  ngOnInit() {
    
    let pload = {
      cookie: this.cookie.get('user'),
      sid: localStorage.getItem('sid'),
      key: "06"
    }

    this.data.postMethod(pload).subscribe(
      data => {
        console.log(data);
        this.designations = data['message'];
        this.displayedColumns = ['id', 'grades', 'levels', 'work_pay', 'action'];
        this.dataSource = new MatTableDataSource(this.designations);
        if ( this.designations.length == 0){

        } else {
          this.dataSource.paginator = this.paginator;
          console.log
        }
        
      }
    );
    
  }

  loadFunction() {
    let pload = {
      cookie: this.cookie.get('user'),
      sid: localStorage.getItem('sid'),
      key: "06"
    }

    this.data.postMethod(pload).subscribe(
      data => {
        console.log(data);
        this.designations = data['message'];
        this.displayedColumns = ['id', 'grades', 'levels', 'work_pay', 'action'];
        this.dataSource = new MatTableDataSource(this.designations);
        if ( this.designations.length == 0){

        } else {
          this.dataSource.paginator = this.paginator;
        }
        
      }
    )
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.afterAllClosed.subscribe( data => this.loadFunction() );
    this.dialog.open(AddDesignationsComponent, dialogConfig);
  }

  search(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (filterValue != ''){
      this.clear = true;
    } else {
      this.clear = false;
    }
  }

  clearSearch() {
    this.searchInput = "";
    this.dataSource.filter = "";
    this.clear = false;
  }

  delete(i: number) {
    let pload = {
      sid: localStorage.getItem('sid'),
      id: i + 1,
      cookie: this.cookie.get('user'),
      key: "07"
    }

    this.data.postMethod(pload).subscribe(
      data => {
        console.log(data);
      }
    )
  }

  

}