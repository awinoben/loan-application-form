import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoanInfoStorageService } from '../../global/services/loan-info-storage.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

  salaryForm!: FormGroup;
  submitted: boolean = false;
  _tmpProgress: number = 50;
  private _tmpMinSalary = 100;

  get progress() { return this._tmpProgress; }
  get fields() { return this.salaryForm.controls };

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private LoanInfoStorageService : LoanInfoStorageService
  ) { }

   createForm() {
    this.salaryForm = this.fb.group({
      salary: ['', [Validators.required, Validators.min(this._tmpMinSalary) ]]
    });
  }

  onSubmit() {
   this.submitted = true;
    if (this.salaryForm.invalid) {
            return;
    }
   
   this.LoanInfoStorageService.SalaryChange(this.salaryForm.value['salary']);
   this.router.navigate(['/working-time']);
  }

  ngOnInit() {
   this.createForm();
  } 

}