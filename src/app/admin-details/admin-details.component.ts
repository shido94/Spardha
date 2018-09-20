import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {
  collections = [];
  status = [];
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      const details$ = this.userService.getDetails(params['id']);
      details$.subscribe(result => {
        this.collections = result.data.captainId;
        this.status = result.status;
        console.log(this.status);
      });
    });
  }

}
