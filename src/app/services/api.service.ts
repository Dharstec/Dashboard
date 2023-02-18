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

  deleteProduct(_id) {
    let url=`https://ecommerce-kxhu.onrender.com/Product/deleteProduct/${_id}`;
    // let url = `http://localhost:8000/Product/deleteProduct/${_id}`
    return this.http.delete(url, _id)
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
