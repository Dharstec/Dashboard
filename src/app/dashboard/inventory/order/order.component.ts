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
  // _id:'';
  // orderStatus:string;
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
//   updateOrderStatus(){
//     let body={
// "_id":_id,
// "orderStatus":orderStatus
//     }
//     this.api.updateOrderData(body).subscribe((result)=>{
// console.log(result);

//     })
//   }

  updateOrderStatus(rowdata,type){
    console.log(rowdata);
    
    // let events =event.target.value    
    // console.log(_id,orderStatus);
    // type={
    //   pending:'pending',
    //   dispatched: "dispatch",
    //   delivered:'delivered'
    // }
  let body={
    "_id":rowdata._id,
    "orderStatus":type,
    
        }
     
this.api.updateOrderData(body).subscribe((res:any)=>{
console.log(res);
this.orderList=res.data
console.log(this.orderList);

// this.pending(_id,orderStatus)
})
}
dispatch(){

}
delivery(){

}
}

