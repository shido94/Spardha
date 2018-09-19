import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as $ from 'jquery';
import {EventBusService} from '../services/event-bus.service';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: String;
  err = false;
  loginForm: FormGroup;

  @Output() refresh: EventEmitter<boolean> = new EventEmitter<boolean>();

  libControl = new FormControl(null, [Validators.required]);
  gameControl = new FormControl('cricket', [Validators.required]);

  constructor(private router: Router,
              private userService: UserService,
              private eventBus: EventBusService) {
    this.loginForm = new FormGroup({
      libId: this.libControl,
      game: this.gameControl
    });
  }

  ngOnInit() {
    $(function () {
      // Get the modal
      const modal = document.getElementById('myModal');

// Get the button that opens the modal
      const btn = document.getElementById('clickme');

// Get the <span> element that closes the modal
      const span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
      btn.onclick = function () {
        modal.style.display = 'block';
      };

// When the user clicks on <span> (x), close the modal
      $('span').onclick = function () {
        modal.style.display = 'none';
      };

// When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      };

    });
  }

  onLogin() {
    const obs = this.userService.loginUser(this.loginForm.value);
    obs.subscribe(data => {
        if (data.success) {
          localStorage.setItem('USER_TOKEN', data.token);
          localStorage.setItem('USER_NAME', data.username);
          this.router.navigate(['user']);
          this.eventBus.announce('LOGIN_SUCCESS');
          this.refresh.next(true);
        } else {
          this.err = true;
          this.error = data.message;
        }
      });
  }
}
