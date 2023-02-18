import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
orderList:any;
  allOrderList: any;
  orderSearchValue: '';
  fileName = 'orderDetailsExcel.xlsx';
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getOrderData().subscribe(async (result:any)=>{
      console.log("orderresult",result);
      this.orderList=result.data
      // this.orderList=result.data.orders
      console.log("orderList",this.orderList);
      
      this.allOrderList=this.orderList;
      console.log("allOrderList",this.allOrderList);
      
    })
  }
  exportexcel() {
    this.orderList = document.getElementById("excel-table-id");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.orderList);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    console.log("wb", wb);

    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);


  }
}

