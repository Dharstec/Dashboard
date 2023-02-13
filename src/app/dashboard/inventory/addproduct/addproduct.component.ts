import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ProductdetailsService } from 'src/app/services/productdetails.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  productResult: any;
  productForm: FormGroup;
  editproduct: any;
  productview: any = false;
  hideButton: any = false;
  changename: any;
  changetheproductName: any
  constructor(private productDetails: ProductdetailsService, private route: ActivatedRoute, private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {

    let product = this.productDetails.getdata()
    this.productResult = product.data
    console.log(this.productResult);// data tables 
    this.addProductform(this.productResult)
    this.productview = this.productResult ? true : false
    this.hideButton = product.type == 'view' ? true : false
    this.changename = this.route.queryParams.subscribe((result) => {
      // this.changetheproductName
      const data = result.type;
      console.log(data);
      if (data == 'addProduct') {
        this.changetheproductName = 'Add Product'
        this.editproduct = true
      }
      else if (data == 'editProduct') {
        this.changetheproductName = "Edit Product"

      }
      else {
        this.changetheproductName = "View Product"

      }
    })
    // this.sub = this.route.params.subscribe((params) => {
    //   const data: params.data;
    // });
  }
  addProductform(row) {
    this.productForm = this.formBuilder.group({
      productName: [row && row.productName ? row.productName : null,], //bc name 
      discountPrice: [row && row.discountPrice ? row.discountPrice : null,],
      comparedPrice: [row && row.comparedPrice ? row.comparedPrice : null,],
      description: [row && row.description ? row.description : null,],
      gender: [row && row.gender ? row.gender : null,],
      _id: [row && row._id ? row._id : null,],
      stock: [row && row.stock ? row.stock : null,],
      category: [row && row.category ? row.category : null,],
      stone: [row && row.stone ? row.stone : null,],
      colour: [row && row.colour ? row.colour : null,],
      style: [row && row.style ? row.style : null,],

      referenceId: [row && row.referenceId ? row.referenceId : null]

    })
  }


  addProductData() {
    if(this.changetheproductName == 'Add Product' ){
      let form = this.productForm.getRawValue()
      let body = {
        "productName": form.productName,
        "discountPrice": Number(form.discountPrice),
        "actualPrice": Number(form.comparedPrice),
        "description": form.description,
        "category": form.category,
  
        "stone": form.stone,
        "colour": form.colour,
        "referenceId": Number(form.referenceId),
        "style": form.style,
        "stock": Number(form.stock),
        "for": form.gender,  
        
    }
    this.api.createProductData(body).subscribe((result) => {
      console.log(result);

    })
   
  }
  else{
    this.editproduct=!this.editproduct
  }
   
  
      //   "productName": "prod-2",
      // "discountPrice": 100,
      // "actualPrice": 200,
      // "description": "asdfghjklwqertgfhjukixcvbnm",
      // "category": [
      //     "Necklace"
      // ],
      // "stone": [
      //     "Colored Stone"
      // ],
      // "colour": [
      //     "Gold"
      // ],
      // "referenceId": 16,
      // "style": [
      //     "Office"
      // ],
      // "stock": 2,
      // "for": [
      //     "womens"
      // ]


      //       "referenceId":Number(form.referenceId),
      //       "productName": form.productName,
      //       "discountPrice": Number(form.discountPrice),
      //       "actualPrice": Number(form.comparedPrice),
      //       "description": form.description,
      //       "category": form.category,

      //       "stone": form.stone,
      //       "colour": form.colour,

      //       "style": form.style,
      // "stock": Number(form.stock),
      //       "for": form.gender,


    // }

   
  }

  //edit ==> form group
  editProductData() {
    let form = this.productForm.getRawValue()
    let body = {
      "_id": form._id,
      "productName": form.productName,
      "discountPrice": form.discountPrice,
      "actualPrice": form.comparedPrice,
      "description": form.description,
      "stock": form.stock,
      "category": form.category,
      "stone": form.stone,
      "colour": form.colour,
      "style": form.style,
      "for": form.gender

    }
    this.api.updateProduct(body).subscribe((res) => {
      console.log(res);

    })
  }
}

// {
//   "productName": "Golden Love Typography Necklace",
//   "productImage": "https://cdn.shopify.com/s/files/1/0061/8378/0442/products/PD01001_1-min_1024x1024.jpg?v=1669902028",
//   "discountPrice": 1499,
//   "actualPrice": 2999,
//   "description": "The Golden Love Typography Necklace is inspired by the love you always want to keep close.",
//   "stock": 3,
//   "category": [
//       "Necklace"
//   ],
//   "stone": [
//       "Colored Stone"
//   ],
//   "colour": [
//       "Gold"
//   ],
//   "style": [
//       "Office"
//   ],
//   "for": [
//       "Women"
//   ],
//   "gift": "true",
//   "personalised": "true",
//   "latest": "false",
//   "collections": [
//       "Occasion 1"
//   ],
//   "viewedBy": {
//       "customerId": [
//           "63e33f384a30354cd7e76da3"
//       ]
//   },
//   "noOfViews": 4,
//   "noOfSales": 5,
//   "productAge": "08/02/2023"
// }