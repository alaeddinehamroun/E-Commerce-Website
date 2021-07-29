import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  products: ProductResponseModel[] = [];
  private SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  getOrder(orderId: Number) {
    return this.http.get<ProductResponseModel[]>(`${this.SERVER_URL}/orders/${orderId}`).toPromise();
  }

}
interface ProductResponseModel {
  id: Number;
  title: String;
  description: String;
  price: Number;
  quantityOrdered: Number;
  image: String;
}
