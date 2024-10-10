import { Component } from '@angular/core';
import * as products from '../../../public/products.json'

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: any = (products as any).default;

  addProduct(){
    
    console.warn(this.products)
    const product  = {
      id: 1,
      name: "Chair2",
      description: "Ergonomic chair",
      price: 9999.99,
      stock: 1023
    }

    this.products.push(product)
    console.warn(this.products)
  }
}
