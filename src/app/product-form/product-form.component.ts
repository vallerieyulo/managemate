import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  productForm = this.formBuilder.group({
    id: [0],
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, Validators.required],
    stock: [0, Validators.required],
  })
  
  editId?:number;
  constructor(private formBuilder:FormBuilder, private productService: ProductService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
    const routeId = this.route.snapshot.paramMap.get('id') || 0
    this.editId = +routeId

    if(this.editId){
      const product = this.productService.getProductById(this.editId);

      this.productForm.patchValue(product);
    }
  }

  saveProduct(){
    if(this.productForm.valid){
      const product = this.productForm.getRawValue() as unknown as Product
      if(!this.editId){
        this.productService.addProduct(product)
      } else{
        this.productService.editProduct(product)
      }
      this.router.navigateByUrl("/products")
    }
  }
}
