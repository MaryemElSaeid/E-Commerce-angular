import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products:Product[];
  constructor(private _ProductService: ProductService) { }

  ngOnInit(): void {
    this._ProductService.getProducts().subscribe((res: any) => {
      this.products = res.data;
      // console.log(this.products)
    });
    
  }

}
