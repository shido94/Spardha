import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  data = '';
  payble = '';
  paytm = '';
  disable = true;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getID().subscribe(data => {
      if (data.success) {
        this.data = data.data;
        this.payble = data.TXN_AMOUNT;
        this.paytm = data;
        if (data.status === 'TXN_SUCCESS') {
          this.disable = false;
        } else {
          this.disable = true;
        }
      }
    });
  }

  GoPayment() {
    this.userService.goPaytm(this.paytm);
    // this.router.navigate(['payment_response']);
  }

}
