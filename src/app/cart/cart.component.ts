import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  allproducts=JSON.parse(localStorage.getItem('items'));
  
  constructor() { }
   
   

  ngOnInit(): void {
    console.log(this.allproducts)
  }

}
