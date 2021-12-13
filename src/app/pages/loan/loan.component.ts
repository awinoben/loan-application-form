import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoanInfoStorageService } from '../../global/services/loan-info-storage.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  loanForm!: FormGroup;
  submitted: boolean = false;
  _tmpProgress: number = 0;
  _tmpMinTerm: number = 6;
  _tmpMaxTerm: number = 36;
  _tmpMinLoan: number = 1000;
  _tmpMaxLoan: number = 20000;
  _tmpTerm: any = [
      {
        term: this._tmpMinTerm,
        name: "6 months"
      },
      {
        term: 12,
        name: "12 months"
      },
      {
        term: 24,
        name: "24 months"
      },
      {
        term: this._tmpMaxTerm,
        name: "36 months"
      }
  ];
  private _ifSliced: boolean = false;
  private _tmpTermArr!: any [];

  get progress() { return this._tmpProgress; }
  get fields() { return this.loanForm.controls };

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private LoanInfoStorageService : LoanInfoStorageService
    ) {
  
  }

  checkLoanAmount($event: any) {
    if($event > (this._tmpMinLoan * 5) && !this._ifSliced )
    {
      this._tmpTermArr = this._tmpTerm[0];
      this._tmpTerm.splice(0,1);
      this._ifSliced = true;
    }

    if($event < (this._tmpMinLoan * 5) && this._ifSliced && this._tmpTermArr){
       this._tmpTerm.unshift(this._tmpTermArr);
       this._ifSliced = false;
    }
  }

   createForm() {
    this.loanForm = this.fb.group({
      loanAmount: ['', [Validators.required, Validators.min(this._tmpMinLoan), Validators.max(this._tmpMaxLoan)] ],
      loanTerm: ['', [Validators.required, Validators.min(6), Validators.max(this._tmpMaxTerm)]]
    });
  }

onSubmit() {
   this.submitted = true;
    if (this.loanForm.invalid) {
            return;
    }

   this.LoanInfoStorageService.loanAmountChange(this.loanForm.value['loanAmount']);
   this.LoanInfoStorageService.loanTermChange(this.loanForm.value['loanTerm']);  
   this.router.navigate(['/userinfo']);
}

ngOnInit() {
   this.createForm();
}
}