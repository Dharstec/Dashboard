import { Component, OnInit } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // Date:any
  // currentDate:any = new Date();
  today= new Date();
  todaysDataTime = '';
  public isMenuOpen: boolean = false;
  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
  constructor(private datePipe:DatePipe) { 

  }
  ngOnInit(): void {
    // this.currentDate=formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US')
    // this.datePipe.transform(this.currentDate,'MM-dd-yyyy')
    this.todaysDataTime = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  }

  sidenavtoggle(){

  }
  mainContentCollapse(){
    return this.isMenuOpen ? 'expand' : 'remove'  }



}
