import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoanInfoStorageService } from '../../global/services/loan-info-storage.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  _tmpProgress: number = 100;
  get progress() { return this._tmpProgress; }

  public loanAmount: number = this.LoanInfoStorageService.getLoanAmount();
  public loanTerm: number = this.LoanInfoStorageService.getloanTerm();
  public userName: string = this.LoanInfoStorageService.getUserName();
  public salary: number = this.LoanInfoStorageService.getSalary();
  public workedTime: number = this.LoanInfoStorageService.getWorkedTime();

  constructor(private LoanInfoStorageService : LoanInfoStorageService) { 

  }

  ngOnInit() {
  }

}