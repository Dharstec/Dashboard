import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  getProductData() {
    let url = 'https://ecommerce-kxhu.onrender.com/Product/getProduct';
    return this.http.get(url);
  }
  createProductData(body) {
    let url = 'https://ecommerce-kxhu.onrender.com/Product/createProduct';
    // let url="http://localhost:8000/Product/createProduct"
    return this.http.post(url, body)
  }
  updateProduct(_id) {
    let url = 'https://ecommerce-kxhu.onrender.com/Product/updateProduct';
    // let url ="http://localhost:8000/Product/updateProduct"
    return this.http.put(url, _id)
  }

  deleteProduct(body) {
    let url='https://ecommerce-kxhu.onrender.com/Product/deleteProduct';
    let headers = new Headers();
    // let url = `http://localhost:8000/Product/deleteProduct`
    console.log("url and body", url, body);

    return this.http.delete(url, body)
    // .map((res:any)=>res.json());
  }

  // deleteUser(_id){
  //   let headers = new Headers();
  //   return this.http.delete(this.deleteurl+_id)
  //   .map(res => res.json());
  // }
  getOrderData() {
    let url = "https://ecommerce-kxhu.onrender.com/Order/getAllOrder";
    return this.http.get(url)
  }

}
