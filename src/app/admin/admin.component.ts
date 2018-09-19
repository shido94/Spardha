import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {EventBusService} from '../services/event-bus.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loginForm: FormGroup;

  emailControl = new FormControl(null, [Validators.required, Validators.email]);
  passwordControl = new FormControl(null, [Validators.required]);

  constructor(private router: Router,
              private userService: UserService,
              private eventBus: EventBusService) {
    this.loginForm = new FormGroup({
      email: this.emailControl,
      password: this.passwordControl
    });
  }

  ngOnInit() {
  }

  onLogin() {
    const obs = this.userService.loginAdmin(this.loginForm.value);
    obs.subscribe(data => {
        if (data.success) {
          localStorage.setItem('USER_TOKEN', data.token);
          // localStorage.setItem('USER_NAME', data.username);
          localStorage.setItem('USER_ROLE', data.admin);
          this.eventBus.announce('LOGIN_SUCCESS');
          this.router.navigate(['admin/home']);
        }
      },
      error => {
        // this.alertService.error(error.error.message);
      });
  }

}
