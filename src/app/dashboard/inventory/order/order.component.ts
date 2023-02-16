import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
orderList:any;
  allOrderList: any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getOrderData().subscribe(async (result:any)=>{
      console.log("orderresult",result);
      this.orderList=result.data
      this.allOrderList=this.orderList;
    })
  }

}
