import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {
  message: String;
  orderId: Number;
  products: ProductResponseModel[];
  cartTotal;
  constructor(private router: Router,
              private orderService: OrderService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      message: String,
      products: ProductResponseModel[],
      orderId: Number,
      total: Number
    };
    console.log(state)

    this.message = state.message;
    console.log(this.message)
    this.products = state.products;
    console.log(this.products);
    this.orderId = state.orderId;
    this.cartTotal = state.total;
  }

  ngOnInit() {

  }

}

interface ProductResponseModel {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  quantityOrdered: number

}