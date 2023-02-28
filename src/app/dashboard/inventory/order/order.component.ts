import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import * as XLSX from 'xlsx';
import { DialogOrderstatusComponent } from './dialog-orderstatus/dialog-orderstatus.component';
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
  // showButton: boolean = false;
  constructor(private api:ApiService,private matDialog: MatDialog,) { }

  ngOnInit(): void {

    this.api.getOrderData().subscribe(async (result:any)=>{
      // console.log("orderresult",result);
      this.orderList=result.data
      // this.orderList=result.data.orders
      // console.log("orderList",this.orderList);
      
      this.allOrderList=this.orderList;
      // console.log("allOrderList",this.allOrderList);
      
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

 openDialogOrderStatus(row): Observable<any> {
  console.log("row",row);
    let dialog = this.matDialog.open(DialogOrderstatusComponent, {
      width: '400px',
      // data:row,
      data: {
        _id: row._id,
        orderStatus: row.orderStatus,
      },
    })

    // this.showButton=true
    console.log("dialog box", dialog.afterClosed());
    // console.log("data",dialog.data);
    dialog.afterClosed().subscribe(result=>{
      console.log("aftercloser",result);
      
      this.orderList=result
    // this.showButton=true
    this.api.getOrderData().subscribe(async (result:any)=>{
      console.log("orderresult",result);
      this.orderList=result.data
      // this.orderList=result.data.orders
      console.log("orderList",this.orderList);
      
      this.allOrderList=this.orderList;
      console.log("allOrderList",this.allOrderList);
      
    })
  })
    return dialog.afterClosed()

  }


  updateOrderStatus(rowdata,type){
    console.log(rowdata);
  let body={
    "_id":rowdata._id,
    "orderStatus":type,
    
        }
this.api.updateOrderData(body).subscribe((res:any)=>{
console.log(res);
this.orderList=res.data
console.log(this.orderList);
// this.showButton=true

// this.pending(_id,orderStatus)
})
}
}


// pending --> dispatch ---> popup --> input -->save--> dispatch--> upadtes stauts
// after close get api called 
  // let events =event.target.value    
    // console.log(_id,orderStatus);
    // type={
    //   pending:'pending',
    //   dispatched: "dispatch",
    //   delivered:'delivered'
    // }
