import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModelServer } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: ProductModelServer[] = [];
  constructor(private productService: ProductService,
              private cartService: CartService,
              private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: response => {
        this.products = response.products;
        console.log(this.products)

      },
      error: err => //this.errorMessage = err
              console.log(err)
    });
  }

  selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();
  }

  AddToCart(id: number){
    this.cartService.AddProductToCart(id);
  }

}
