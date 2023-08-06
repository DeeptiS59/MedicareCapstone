import { Component } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent { 
cartItems: any = [];
cartValue: number = 0;
constructor(private cartService: CartService) { }
ngOnInit(): void {
  let x: String = localStorage.getItem("userId") || "";
  this.cartService.getAllCartItems(x).subscribe((res: any[]) => {
    this.cartItems = res;
    this.computeCartValue();
    let x: String = localStorage.getItem("userId") || "";
    this.cartService.emptyCartItems(x).subscribe((res: any[]) => { })
  });
  console.log(x);
}
computeCartValue() {
  let sum = 0;
  for (var item of this.cartItems) {
    sum += item.medicine.price;
  }
  this.cartValue = sum;
}
}