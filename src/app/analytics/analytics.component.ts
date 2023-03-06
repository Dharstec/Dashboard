import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent {
totalCount=[
  {totalRecords:89935,title:'Sales',icon:'point_of_sale',rate:10,ratio:1.2},
  {totalRecords:1250,title:'Orders',icon:'local_mall',rate:3.1,ratio:3.2},
  {totalRecords:8935,title:'Visitor',icon:'person',rate:1,ratio:1.5},
  {totalRecords:1235,title:'Customers',icon:'groups',rate:13,ratio:4.2},

]
}
