import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ProgressBarModule } from './global/progress-bar/progress-bar.module';
import { HomeComponent } from './pages/home/home.component';
import { LoanComponent } from './pages/loan/loan.component';
import { SalaryComponent } from './pages/salary/salary.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { WorkingTimeComponent } from './pages/working-time/working-time.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'  },
  { 
    path: 'home', 
    component: HomeComponent,
  }, {
    path: 'loan',
    component: LoanComponent,
  }, {
    path: 'userinfo',
    component: UserInfoComponent,
  }, {
    path: 'salary',
    component: SalaryComponent,
  }, {
    path: 'working-time',
    component: WorkingTimeComponent,
  }, {
    path: 'summary',
    component: SummaryComponent,
  }
];

@NgModule({
  declarations: [HomeComponent, LoanComponent, UserInfoComponent, SalaryComponent, WorkingTimeComponent, SummaryComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    ProgressBarModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
