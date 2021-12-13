import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoanInfoStorageService } from '../../global/services/loan-info-storage.service';

@Component({
  selector: 'app-working-time',
  templateUrl: './working-time.component.html',
  styleUrls: ['./working-time.component.css']
})
export class WorkingTimeComponent implements OnInit {

  workingForm!: FormGroup;
  submitted: boolean = false;
  _tmpProgress: number = 75;
   private _tmpWTime = 3;
   private currentSalary!: Number;
   private currentAmount!: Number;
   private currentSalaryMin: Number = 500;
   private currentAmountMin: Number = 10000;
   public SalaryToLow = false;

  get progress() { return this._tmpProgress; }
  get fields() { return this.workingForm.controls };

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private LoanInfoStorageService : LoanInfoStorageService
  ) { }

   createForm() {
    this.workingForm = this.fb.group({
      wTime: ['', [Validators.required, Validators.min(this._tmpWTime)]]
    });
  }

  onSubmit() {
   this.submitted = true;
    if (this.workingForm.invalid) {
            return;
    }

   this.LoanInfoStorageService.WorkedTimeChange(this.workingForm.value['wTime']);
   this.router.navigate(['/summary']);
  }

  ngOnInit() {

   this.currentSalary = this.LoanInfoStorageService.getSalary();
   this.currentAmount = this.LoanInfoStorageService.getLoanAmount();

  /** if current salary is lower then 500 and current amount of loan is bigger then 10000 */
   if(this.currentSalary <= this.currentSalaryMin && this.currentAmount >= this.currentAmountMin) {
     this.SalaryToLow = true;
   }
   else {
      this.createForm();
   }
  
  } 

}