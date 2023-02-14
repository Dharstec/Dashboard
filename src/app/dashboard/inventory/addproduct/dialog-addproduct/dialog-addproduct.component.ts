import { Component, OnInit } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';

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
// {datakey:string,key:string}
  constructor( @Inject(MatDialogModule) public data:any,private api: ApiService) { 

  }

  ngOnInit(): void {
    console.log("inventory data is",this.data.datakey)
 
  }
  deleteProduct(){
    // this.api.deleteProduct().subscribe((result)=>{
    //   console.log(result);
      
    // })
  }
}

// export class YourDialog {
//   constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string}) { }
// }