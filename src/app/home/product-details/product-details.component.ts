import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit , OnDestroy {
  
  private _routeParamsSub: Subscription;
  product:Product;
  productForm: FormGroup = this._fb.group({
    quantity: ['', Validators.required ],
    
  });
  constructor( private _fb: FormBuilder,private _route: ActivatedRoute,private _productsService: ProductService) { }
  onSubmit(form: FormGroup) {
      console.log(form)
  }


  ngOnInit(): void {
    this._routeParamsSub = this._route.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        this._productsService.getProductById(paramMap.get('id')).subscribe((res: any) => {
          this.product = res.data;
        });
      }
    });
  }
  ngOnDestroy(): void {
    this._routeParamsSub.unsubscribe();
  }

}


