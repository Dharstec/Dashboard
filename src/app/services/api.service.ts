import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private http:HttpClient) { }

  getProductData(){
    let url='https://ecommerce-kxhu.onrender.com/Product/getProduct';
    return this.http.get(url);
  }
  createProductData(body){
    // let url = 'https://ecommerce-kxhu.onrender.com/Product/createProduct';
    let url="http://localhost:8000/Product/createProduct"
    return this.http.post(url,body)
  }
  updateProduct(_id){
    // let url='https://ecommerce-kxhu.onrender.com/Product/updateProduct';
    let url ="http://localhost:8000/Product/updateProduct"
    return this.http.put(url,_id)
  }
  deleteProduct(_id){
    // let url='https://ecommerce-kxhu.onrender.com/Product/deleteProduct';
    let url="http://localhost:8000/Product/deleteProduct"
    return this.http.delete(url,_id)
  }

}

// showdata=any
// create service 
// setdata(rowData) and getdata(){
// set
// } ===> funtion name

// setdata(data){}
// this.showData=data
// }
// getdata(){
// return this.showData
// }