import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-captain-list',
  templateUrl: './captain-list.component.html',
  styleUrls: ['./captain-list.component.css']
})
export class CaptainListComponent implements OnInit {
  public captains: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    const list$ = this.userService.captainLIst();
      list$.subscribe(result => {
      console.log(result);
      this.captains = result;
    });
  }
}
