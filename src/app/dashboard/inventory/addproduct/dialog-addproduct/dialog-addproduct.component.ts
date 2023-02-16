import { Component, OnInit } from '@angular/core';
import {MatDialogModule,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dialog-addproduct',
  templateUrl: './dialog-addproduct.component.html',
  styleUrls: ['./dialog-addproduct.component.scss']
})
export class DialogAddproductComponent implements OnInit {
productName:any
  row: any;
// {datakey:string,key:string}
  constructor( @Inject(MAT_DIALOG_DATA) public data:any,private api: ApiService, ) { 

  }

  ngOnInit(): void {
    console.log("inventory data is",this.data)
    this.productName = this.data.productName
 
  }
  deleteProduct(){
    let body={
      "_id":this.data.productId

    }
    console.log("_id of delete",body);
    
    this.api.deleteProduct(body).subscribe((result)=>{
      console.log(result);
      window.location.reload()
      
    })
  }
}
