import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {distinctUntilChanged, filter} from 'rxjs/operators';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {
  data = {};
  error: String;
  block = false;
  err = false;
  uploadForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit() {

    this.uploadForm = this.formBuilder.group({
      name: '',
      branch: '',
      year: '',
      libId: [null, Validators.required],
      phone: [null, Validators.required],
      game: ['chess', Validators.required],
      gender: '',
      type: ['individual']
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
        } else{
          this.uploadForm.controls['name'].setValue('');
          this.uploadForm.controls['branch'].setValue('');
          this.uploadForm.controls['year'].setValue('');
          this.uploadForm.controls['gender'].setValue('');
          this.block = false;
        }
      });

    });


  }

//////// Submit Form/////////////

  OnUpload (submitForm: any ) {
    const obs$ = this.userService.singleRegister(submitForm);
    obs$.subscribe(data => {
      if (data.success) {
        localStorage.setItem('USER_TOKEN', data.token);
        localStorage.setItem('USER_NAME', data.libId);
        this.router.navigate(['player']);
      } else {
        this.err = true;
        this.error = data.message;
      }
    });
  }

}
