import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';


// export interface InventoryElement {
//   CATEGORY: string;
//   ID: number;
//   COLOR: string;
//   NAME: string;
//   INSTOCK: number;
// }
// const ELEMENT_DATA: InventoryElement[] = [
//   { ID: 1, CATEGORY: 'Ring', COLOR: 'Silver', NAME: 'Renosa ring', INSTOCK: 2 },
//   { ID: 2, CATEGORY: 'Ring', COLOR: 'Silver', NAME: 'Renosa ring', INSTOCK: 200 },
//   { ID: 3, CATEGORY: 'Ring', COLOR: 'Silver', NAME: 'Renosa ring', INSTOCK: 50 },
//   { ID: 4, CATEGORY: 'Ring', COLOR: 'Silver', NAME: 'Renosa ring', INSTOCK: 20 },
//   { ID: 5, CATEGORY: 'Ring', COLOR: 'Silver', NAME: 'Renosa ring', INSTOCK: 40 },
//   { ID: 6, CATEGORY: 'Ring', COLOR: 'Silver', NAME: 'Renosa ring', INSTOCK: 80 },
//   { ID: 7, CATEGORY: 'Ring', COLOR: 'Silver', NAME: 'Renosa ring', INSTOCK: 50 },
//   { ID: 8, CATEGORY: 'Ring', COLOR: 'Silver', NAME: 'Renosa ring', INSTOCK: 2 },
//   { ID: 9, CATEGORY: 'Ring', COLOR: 'Silver', NAME: 'Renosa ring', INSTOCK: 50 },
//   { ID: 10, CATEGORY: 'Ring', COLOR: 'Silver', NAME: 'Renosa ring', INSTOCK: 40 },
// ];


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  // displayedColumns: String[] = ['ID', 'CATEGORY', 'COLOR', 'NAME', 'INSTOCK'];
  // dataSource = ELEMENT_DATA;

  // category: string[] = [
  //   "Anklets",
  //   "Bracelets",
  //   "Bangles",
  //   "Earrings",
  //   "Necklace",
  //   "Nose Pins",
  //   "Pendant",
  //   "Rings",
  //   "Jewellery Set",
  //   "Toe Rings"
  // ];
  // color: string[] = [
  //   "Gold",
  //   "Oxidised Silver",
  //   "Rose Gold",
  //   "Silver"
  // ];
  // InStock: string[] = [
  //   "1",
  //   "2",
  //   "3",
  //   "4",
  //   "5",
  //   "6",
  //   "7",
  //   "8",
  //   "9",
  //   "10"
  // ];
  productList: any;
  constructor(private api:ApiService) {

  }

  ngOnInit(): void {
    this.api.getProductData().subscribe(async data=>{
     console.log("data",data); // get product data result
    this.productList=data
    await this.getTableData()
    })


  }
  getTableData(){
    let tableData=[]
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
