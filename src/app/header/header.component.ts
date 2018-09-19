import {Component, Input, OnInit} from '@angular/core';
import {EventBusService} from '../services/event-bus.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login = false;
  // username: string | null;
  token: string | null;
  constructor(private eventBus: EventBusService, private router: Router) { }

  ngOnInit() {
    // this.username = localStorage.getItem('USER_NAME');
    this.token = localStorage.getItem('USER_TOKEN');
    if (this.token) {
      this.login = true;
    }
    this.eventBus.listen('LOGIN_SUCCESS').subscribe(user => {
      // this.username = user.username;
      this.login = true;
    });
  }

  logout() {
    localStorage.clear();
  }

}
