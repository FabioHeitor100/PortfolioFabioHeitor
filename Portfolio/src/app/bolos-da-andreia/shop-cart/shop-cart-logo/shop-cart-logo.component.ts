import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-cart-logo',
  templateUrl: './shop-cart-logo.component.html',
  styleUrls: ['./shop-cart-logo.component.css']
})
export class ShopCartLogoComponent implements OnInit {
  shopCart = '../../../../assets/shopcartlogo.png';

  constructor() { }

  ngOnInit(): void {
  }

}
