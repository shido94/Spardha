import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  login = false;
  token: string | null;

  constructor(private router: Router) { }

  ngOnInit() {
    // this.username = localStorage.getItem('USER_NAME');
    this.token = localStorage.getItem('USER_TOKEN');
    if (this.token) {
      this.login = true;
    }
  }

  logout() {
    localStorage.clear();
    // this.router.navigate([ 'admin', 'login']);
  }

}
