import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert';

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
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.userService.getID(id).subscribe(data => {
        if (data.success) {
          console.log('data --> ', data);
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
    });
  }

  GoPayment() {
    this.userService.goPaytm(this.paytm);
  }

}
