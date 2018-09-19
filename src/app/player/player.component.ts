import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import swal from 'sweetalert';
import {distinctUntilChanged, filter} from 'rxjs/operators';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  error: String;
  err = false;
  invoiceForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit() {

    this.invoiceForm = this._fb.group({
      itemRows: this._fb.array([this.initItemRows()]) // here
    });

  }

  initItemRows() {
    return this._fb.group({
      // list all your form controls here, which belongs to your form array
      libId: [null, Validators.required]
    });
  }

  addNewRow() {
    // control refers to your formarray
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    // add new formgroup
    control.push(this.initItemRows());
  }

  deleteRow(index: number) {
    // control refers to your formarray
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    // remove the chosen row
    control.removeAt(index);
  }

  OnUpload (submitForm: any ) {
    const obs$ = this.userService.addMember(submitForm);
    obs$.subscribe(data => {
      if (data.success) {
        if (data.type === 'team') {
          swal('Team has been registered successfully', '' , 'success');
          this.router.navigate(['/next']);
        } else {
          swal('Team has been registered successfully, Now go to payment page', '' , 'success');
          this.router.navigate(['payment']);
        }
      } else {
        this.err = true;
        this.error = data.message;
      }
    });
  }
}
