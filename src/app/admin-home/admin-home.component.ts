import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  games = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getData().subscribe(data => {
      this.games = data.data;
    });
  }

}
