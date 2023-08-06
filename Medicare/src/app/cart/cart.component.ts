import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any = [];
  cartValue: number = 0;
 
constructor(private cartService:CartService) { }
ngOnInit(): void {
  let x: String = localStorage.getItem("userId") || "";
  this.cartService.getAllCartItems(x).subscribe((res: any[]) => {
    this.cartItems = res;
    this.computeCartValue();
  });
  console.log(x);
}
deleteCartItem(cartId: any) {
  this.cartService.deleteCartItem(cartId).subscribe((res: any[]) => {
    let x: String = localStorage.getItem("userId") || "";
    this.cartService.getAllCartItems(x).subscribe((res: any[]) => {
      this.cartItems = res;
      this.computeCartValue();
    });
  });
}
computeCartValue() {
  let sum = 0;
  for (var item of this.cartItems) {
    sum += item.medicine.price;
  }
  this.cartValue = sum;
}

}
