import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  constructor( private router: Router) { }
  onSubmit() {
    this.router.navigate(['/', 'orderSuccess']);
  }
}
