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
      const data = result.type;
      console.log(data);
      if (data == 'addProduct') {
        this.changetheproductName = 'Add Product'
        this.editproduct = true
      }
      else if (data == 'editProduct') {
        console.log("edit data",data);
        
        this.changetheproductName = "Edit Product"
        this.editproduct = false

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
      gender: [row && row.for ? row.for : null,],
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
    if (this.changetheproductName == 'Add Product') {
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
    else {
      this.editproduct = !this.editproduct
    }

  }

  //edit ==> form group
  editProductData() {
    this.editproduct = !this.editproduct
    if (this.changetheproductName == 'Edit Product'){
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
    
}
