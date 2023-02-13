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
  
  constructor( @Inject(MatDialogModule) public data: any,private api: ApiService,private route: Router,) { }

  ngOnInit(): void {
    console.log(this.data)
  }
  // deleteProduct(){
  //   let body={
  //     _id:
  //   }
  //   this.api.deleteProduct(body).subscribe()
  // }
}
