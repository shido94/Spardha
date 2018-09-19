import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {EventBusService} from '../services/event-bus.service';

@Component({
  selector: 'app-captain-id',
  templateUrl: './captain-id.component.html',
  styleUrls: ['./captain-id.component.css']
})
export class CaptainIdComponent implements OnInit {


  loginForm: FormGroup;

  libControl = new FormControl(null, [Validators.required]);
  uniqueControl = new FormControl(null, [Validators.required]);
  gamesControl = new FormControl('cricket', [Validators.required]);

  constructor(private router: Router,
              private userService: UserService,
              private eventBus: EventBusService) {
    this.loginForm = new FormGroup({
      libId: this.libControl,
      uniqueId: this.uniqueControl,
      game: this.gamesControl
    });
  }

  ngOnInit() {
  }

  onLogin() {
    const obs = this.userService.addCaptain(this.loginForm.value);
    obs.subscribe(data => {
        if (data.success) {
          this.eventBus.announce('LOGIN_SUCCESS');
          this.router.navigate(['/home']);
        }
      },
      error => {
        // this.alertService.error(error.error.message);
      });
  }
}

