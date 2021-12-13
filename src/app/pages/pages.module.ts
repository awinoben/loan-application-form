import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProgressBarModule } from '../global/progress-bar/progress-bar.module';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { SalaryComponent } from './salary/salary.component';
import { WorkingTimeComponent } from './working-time/working-time.component';
import { SummaryComponent } from './summary/summary.component';

import { LoanInfoStorageService } from '../global/services/loan-info-storage.service';

@NgModule({
  imports: [
    CommonModule,
     BrowserModule,
     FormsModule,
     ReactiveFormsModule,
     ProgressBarModule
  ],
  declarations: [HomeComponent, LoanComponent, UserInfoComponent, SalaryComponent, WorkingTimeComponent, SummaryComponent],
  exports: [HomeComponent, LoanComponent, UserInfoComponent, SalaryComponent,WorkingTimeComponent, ProgressBarModule, SummaryComponent],
  providers: [LoanInfoStorageService]
})
export class PagesModule { }