import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import swal from 'sweetalert';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  names = {};
  status = '';
  again = true;
  CUST_ID = '';
  amount: number;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userService.approveData().subscribe(data => {
      this.route.queryParams.subscribe(params => {
        const state = params['status'];
        const message = params['message'];
        const amounts = Number(data.amount);
        this.CUST_ID = data._id;
        this.names = data.data;
        console.log('failu --> ', this.status);
        if (data.status === 'TXN_FAILURE') {
          this.again = false;
          this.amount = amounts;
          this.status = 'UNPAID';
        }

        if (data.status === 'TXN_SUCCESS') {
          this.again = true;
          if (amounts >= 68) {
            this.status = 'PAID';
            this.amount = amounts;
          } else {
            this.again = false;
            this.status = 'UNPAID';
            this.amount = amounts;
          }
        }

        if (data.status === 'PENDING') {
          this.again = true;
          this.status = 'PENDING';
        } else {
          this.again = true;
          this.status = data.status;
        }
        this.refreshButton();
        swal(message, '', state);
      });
    });
  }

  refreshButton() {
    const refresh$ = this.userService.refreshData();
    refresh$.subscribe(result => {
      this.names = result.data;
      this.CUST_ID = result._id;
      this.status = result.status;
      if (this.status === 'TXN_FAILURE') {
        this.again = false;
      } else {
        this.again = true;
      }
    });
  }

  payAmount() {
    this.userService.goPaytm({CUST_ID: this.CUST_ID});
  }

}
