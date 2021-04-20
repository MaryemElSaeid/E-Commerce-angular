import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  allproducts=JSON.parse(localStorage.getItem('items'));
  cartTotal : number=0;

  constructor() { }



  ngOnInit(): void {
    
    //console.log(this.allproducts);
    for (var i=0;i<this.allproducts.length;i++){
      this.cartTotal += this.allproducts[i].prototal
    
    }
    console.log(this.cartTotal);
  }



}
