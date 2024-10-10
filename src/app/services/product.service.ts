import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Product } from '../models/product';
import * as PRODUCTS from '../../../public/products.json'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  PRODUCTS: any[] = (PRODUCTS as any).default;
  constructor() { 
  }

  getProducts(): Observable<Product[]> {
    const products = of(this.PRODUCTS as Product[]).pipe(delay(300));
    return products;
  }

  getLastProductId(): number{
    const lastProductId = Math.max(...this.PRODUCTS.map(product => product.id))
    return lastProductId ?? 0;
  }

  getProductById(id: number): Product{
    const product = this.PRODUCTS.find(product => product.id === id);
    return product as Product;
  }

  addProduct(product:Product): void{
    if(!product.id){
      const lastProductId = this.getLastProductId();
      product.id = lastProductId + 1;
    }
    this.PRODUCTS.push(product)
  }

  editProduct(editedProduct: Product):void{
    const productIdToUpdate = this.PRODUCTS.findIndex(product => product.id === editedProduct.id)
    this.PRODUCTS[productIdToUpdate] = editedProduct
  }

  deleteProduct(selectedProductId: number):void{
    const productIdToUpdate = this.PRODUCTS.findIndex(product => product.id === selectedProductId)
    this.PRODUCTS.splice(productIdToUpdate,1)
  }




}
