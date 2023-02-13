import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ProductdetailsService } from 'src/app/services/productdetails.service';
import { DialogAddproductComponent } from './addproduct/dialog-addproduct/dialog-addproduct.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  showProductPage: Boolean = false;
  searchText: '';
  setData: any;
  editProductDetails = true;
  productList: any;
  productFormGroup: any
productAllList:any

  Catagory = new FormControl('');

  CatagoryList: string[] = [
    "Anklets",
    "Bracelets",
    "Bangles",
    "Earrings",
    "Necklace",
    "Nose Pins",
    "Pendant",
    "Rings",
    "Jewellery Set",
    "Toe Rings"];
  Color = new FormControl('');
  ColorList: string[] = [
    "Gold",
    "Oxidised Silver",
    "Rose Gold",
    "Silver"
  ]
  Stocks = new FormControl('');
  StockLists: string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
  ]
  selectedFilterList: any;

  constructor(private matDialog: MatDialog, private api: ApiService, private route: Router, private productDetails: ProductdetailsService, public dialog: MatDialog, private formBuilder: FormBuilder) {
  }
  openDialog(row):Observable<any> {
   let dialog= this.matDialog.open(DialogAddproductComponent, {
      width: '400px',
      data:{
       datakey:row.productName,
        key:row._id
      //  row.data.productName
      },
    })
    return dialog.afterClosed()
  }


  ngOnInit(): void {
    this.api.getProductData().subscribe(async data => {
      console.log("data", data); // get product data result
      this.productList = data
      // await this.getTableData()

    })
    this.showProductPage = false
    this.productFormGroup = this.formBuilder.group({
      Catagory: [null,],
      Color: [null],
      Stocks: [null]
    })
  }
  productCategory(event, row, type) {
    let checked = event.target.checked
    if (checked) {
      this.productList.data.forEach(element=>{
        element.category.map(items=>{
          // this.CatagoryList.forEach(x=>{
          //   if(x.CatagoryList==items.category && x.checked)
          // })
        })

      })

    }
    else {

    }
  }
  addproduct() {
    this.productDetails.setdata(false)
    console.log(this.productDetails);
    
    // this.showProductPage=true
    return this.route.navigate(['dashboard/productDetails'],{queryParams:{type:'addProduct'}})

  }
  editProduct(rowData, viewData?: any) {

    // let view= viewData == 'view' ? 'view' : rowData
    this.productDetails.setdata(rowData, viewData)
    console.log(rowData);
    this.route.navigate(['dashboard/productDetails'],{queryParams:{type:!viewData ? 'editProduct' :'viewProduct'}})
    // return this.route.navigate(['dashboard/productDetails'],{queryParams:{type:'editProduct',viewData:'viewProduct'}})
  }

  // getTableData() {
  //   let tableData = []
  //   this.productList.data.forEach(element => {
  //     tableData.push({
  //       ID: element._id,
  //       CATEGORY: element.category,
  //       COLOR: element.colour,
  //       NAME: element.productName,
  //       INSTOCK: element.stock
  //     })

  //   });
  // }


}
