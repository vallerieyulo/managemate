import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductFormComponent } from './product-form/product-form.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: ProductsComponent },
    { path: 'products/add', component: ProductFormComponent },
    { path: 'products/edit/:id', component: ProductFormComponent },
    { path: '**', component: NotfoundComponent },
];
