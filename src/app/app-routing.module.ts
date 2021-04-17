import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent  } from './contact-us/contact-us.component';
import { ProductDetailsComponent } from './home/product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent 
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: ':id', component: ProductDetailsComponent
  }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
