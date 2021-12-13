import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoanInfoStorageService } from '../../global/services/loan-info-storage.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userForm!: FormGroup;
  submitted: boolean = false;
  _tmpProgress: number = 25;
  private userPattern = "^[a-zA-Z ]+$";

  get progress() { return this._tmpProgress; }
  get fields() { return this.userForm.controls };

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private LoanInfoStorageService : LoanInfoStorageService
  ) { }

   createForm() {
    this.userForm = this.fb.group({
      userFullName: ['', [Validators.required, Validators.pattern(this.userPattern) ]]
    });
  }

  onSubmit() {
   this.submitted = true;
    if (this.userForm.invalid) {
            return;
    }
   
   this.LoanInfoStorageService.userNameChange(this.userForm.value['userFullName']);
   this.router.navigate(['/salary']);
  }

  ngOnInit() {
   this.createForm();
  } 
}