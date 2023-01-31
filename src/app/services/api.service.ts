import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProductData(){
    let url='https://ecommerce-azys.onrender.com/Product/getProduct';
    return this.http.get(url);
  }
}
