import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ProductdetailsService } from 'src/app/services/productdetails.service';
import { DialogAddproductComponent } from './addproduct/dialog-addproduct/dialog-addproduct.component';
import { Observable } from 'rxjs';
import { Options } from '@angular-slider/ngx-slider';
import * as XLSX from 'xlsx';
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
  productAllList: any
  fileName = 'productDetailsExcel.xlsx';
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
  // value: number = 100;
  // highValue: number = 60;
  // options: Options = {
  //   floor: 0,
  //   ceil: 200
  // };
  // Stocks = new FormControl('');
  // StockLists: string[] = [
  //   "1",
  //   "2",
  //   "3",
  //   "4",
  //   "5",
  // ]
  dialogValue: any;
  allProductList: any;
  checked: any;


  constructor(private matDialog: MatDialog, private api: ApiService, private route: Router, private productDetails: ProductdetailsService, public dialog: MatDialog, private formBuilder: FormBuilder) {
  }
  openDialog(row): Observable<any> {
    // :Observable<any>
    let dialog = this.matDialog.open(DialogAddproductComponent, {
      width: '400px',
      data: {
        productName: row.productName,
        productId: row._id,
      },
    })

    //    dialog.afterClosed().subscribe(result=>{
    //     let res = result.data
    //   console.log("this is dialog box", res);
    //   // this.dialogValue=result.data

    // })
    console.log("dialog box", dialog.afterClosed());

    return dialog.afterClosed()
  }



  ngOnInit(): void {
    this.api.getProductData().subscribe(async (res: any) => {
      console.log("data", res); // get product data result
      this.productList = res.data
      this.allProductList = this.productList
      // await this.getTableData()

    })
    this.showProductPage = false
    this.productFormGroup = this.formBuilder.group({
      Catagory: [null,],
      Color: [null],
      Stocks: [null]
    })
  }
  productCategory(event, type) {
    let checked = event.value
    console.log("checked", checked);

    if (checked) {
      let temp = []
      console.log("productList", this.productList);

      this.allProductList.forEach(element => {
        element.category.map(items => {
          checked.forEach(x => {
            if (x == items) {

              temp.push(element)
            }
            this.productList = temp

          })
        })

      })
      this.allProductList.forEach(element => {
        element.colour.map(items => {
          checked.forEach(x => {
            if (x == items) {
              temp.push(element)
            }
            this.productList = temp
          })
        })
      })
      console.log("temp", temp);
      console.log("productListdata", this.productList.data);


    }
    // else {
    //   this.allProductList.forEach(element=> element.checked = false)
    // }
  }

  addproduct() {
    this.productDetails.setdata(false)
    console.log(this.productDetails);
    // this.showProductPage=true
    return this.route.navigate(['dashboard/productDetails'], { queryParams: { type: 'addProduct' } })

  }
  editProduct(rowData, viewData?: any) {
    // let view= viewData == 'view' ? 'view' : rowData
    this.productDetails.setdata(rowData, viewData)
    console.log(rowData);
    this.route.navigate(['dashboard/productDetails'], { queryParams: { type: !viewData ? 'editProduct' : 'viewProduct' } })
    // return this.route.navigate(['dashboard/productDetails'],{queryParams:{type:'editProduct',viewData:'viewProduct'}})
  }


  exportexcel() {
    this.productList = document.getElementById("excel-table-id");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.productList)
    delete(ws['ACTION'])
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    console.log("wb", wb);

    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);


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
