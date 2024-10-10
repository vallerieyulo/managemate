import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: ProductsComponent },
    { path: '**', component: NotfoundComponent },
];
