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
  names = [];
  CUST_ID = '';
  // amount: number;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.queryParams.subscribe(params => {
        const state = params['status'];
        const message = params['message'];
        this.refreshButton();
        swal(message, '', state);
      });
  }

  refreshButton() {
    const refresh$ = this.userService.refreshData();
    refresh$.subscribe(result => {
      this.names = result.data;
    });
  }
  //
  // payAmount() {
  //   this.userService.goPaytm({CUST_ID: this.CUST_ID});
  // }

}
