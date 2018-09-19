import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {EventBusService} from '../services/event-bus.service';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  error: String;
  err = false;
  block = false;
  data = {};

  uploadForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private eventBus: EventBusService) {
  }

  ngOnInit() {

    this.uploadForm = this.formBuilder.group({
      name: '',
      branch: '',
      year: '',
      libId: [null, Validators.required],
      phone: [null, Validators.required],
      game: ['cricket', Validators.required],
      uniqueId: [null, Validators.required],
      gender: '',
      type: ['team']
    });

    this.uploadForm.controls['libId'].valueChanges
      .pipe(
        distinctUntilChanged(),
        filter((value) => {
          return value.length > 3;
        })
      ).subscribe(val => {
      const lib$ =  this.userService.libraryData(val);
        lib$.subscribe(value => {
          if (value[0].valid) {
            this.block = true;
            this.data = value[0];
            this.uploadForm.controls['name'].setValue(value[0].Name);
            this.uploadForm.controls['branch'].setValue(value[0].Dept);
            this.uploadForm.controls['year'].setValue(value[0].year);
            this.uploadForm.controls['gender'].setValue(value[0].Gender);
          } else {
            this.uploadForm.controls['name'].setValue(null);
            this.uploadForm.controls['branch'].setValue(null);
            this.uploadForm.controls['year'].setValue(null);
            this.uploadForm.controls['gender'].setValue(null);
            this.block = false;
          }
        });

    });

  }

//////// Submit Form/////////////

  OnUpload (submitForm: any ) {
    const obs$ = this.userService.teamRegister(submitForm);
    obs$.subscribe(data => {
      this.error = data.message;
      this.err = true;
      if (data.success) {
        localStorage.setItem('USER_TOKEN', data.token);
        localStorage.setItem('USER_NAME', data.libId);
        this.eventBus.announce('LOGIN_SUCCESS');
        this.router.navigate(['player']);
      } else {
        this.err = true;
        this.error = data.message;
      }
    });
  }


}
