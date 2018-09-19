import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-payment-response',
  templateUrl: './payment-response.component.html',
  styleUrls: ['./payment-response.component.css']
})
export class PaymentResponseComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.paytmResponse().subscribe(result => {
      // console.log(result);
    });
  }

}
