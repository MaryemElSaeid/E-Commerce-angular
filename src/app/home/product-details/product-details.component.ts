import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
// import { privateDecrypt } from 'crypto';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit , OnDestroy {
  
  private _routeParamsSub: Subscription;
  product:Product;
   allproducts;

  productForm: FormGroup = this._fb.group({
    quantity: ['',Validators.required],
    
  });
<<<<<<< HEAD

  
  constructor( private _fb: FormBuilder,private _route: ActivatedRoute,private _productsService: ProductService) { }
  onSubmit(form: FormGroup) {
     
    this._routeParamsSub = this._route.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        this._productsService.getProductById(paramMap.get('id')).subscribe((res: any) => {
          this.product = res.data;
          //console.log(this.product)
        });
      }
    });
     
=======
  
  constructor( 
    private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _productsService: ProductService,
        private _router: Router
    ) { }
  onSubmit(form: FormGroup) {
  
    if (form.valid) {
      const productQuantity = form.value;
       const name=this.product.Name;
       const price=this.product.Price;
       const img=this.product.ProductPicUrl;
       const total=(price)*(productQuantity.quantity);
       var project= 
      {
          proname:name,
          proprice:price,
          proimg:img,
          proquantity:productQuantity,
          prototal:total
      }
      
      if(localStorage.getItem('items')==null)
      {
        this.allproducts=[];
    
     }
    else
     {
        this. allproducts=JSON.parse(localStorage.getItem('items'));
         
     }
      this.allproducts.push(project);
      // console.log(this.allproducts);
      localStorage.setItem("items",JSON.stringify(this.allproducts))
   
      
          this._router.navigate(['']);
    }
    
  
>>>>>>> 6de0cb328fd0c9f3dce2a4090517ed6702a2f8e6
  }


  ngOnInit(): void {
    this._routeParamsSub = this._route.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        this._productsService.getProductById(paramMap.get('id')).subscribe((res: any) => {
          this.product = res.data;
          //console.log(this.product);
        });
      }
    });
  }
  ngOnDestroy(): void {
    this._routeParamsSub.unsubscribe();
  }

}


