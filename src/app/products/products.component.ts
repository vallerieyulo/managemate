import { Component } from '@angular/core';
import * as products from '../../../public/products.json'
import { Product } from '../models/product';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products!: Product[];

  constructor(private productService: ProductService){

  }

  ngOnInit(){
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
        .subscribe(products => {
          this.products = products
        }
      );
  }

  deleteProduct(id: number):void {
    this.productService.deleteProduct(id);
  }
}
