import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  searchText:any;
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
    Color=new FormControl('');
    ColorList:string[] = [
      "Gold",
      "Oxidised Silver",
      "Rose Gold",
      "Silver"
    ]
    Stock=new FormControl('');
    StockList:string[]=[
      "1",
      "2",
      "3",
      "4",
      "5",
    ]

  productList: any;
  constructor(private api: ApiService) {

  }


  ngOnInit(): void {
    this.api.getProductData().subscribe(async data => {
      console.log("data", data); // get product data result
      this.productList = data
      await this.getTableData()
    })


  }
  getTableData() {
    let tableData = []
    this.productList.data.forEach(element => {
      tableData.push({
        ID: element.productId,
        CATEGORY: element.category,
        COLOR: element.colour,
        NAME: element.productName,
        INSTOCK: element.stock
      })

    });

  }

}
