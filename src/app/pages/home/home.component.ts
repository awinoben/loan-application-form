import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  _tmpIntroHeadline: string = 'Welcome to Swedbank Loan Application';
  _tmpIntroDesc: string = 'Please fill all the fields in the form to apply for consumer loan. In the end, you will see all summary of loan information.';
  _tmpIntroFooter = 'Thank you.'

  constructor() { }

  ngOnInit() {
  }

}