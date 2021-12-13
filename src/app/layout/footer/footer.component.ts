import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  _tmpDate = new Date();
  _tmpSolution: string = 'http://www.webai.lt/cv';

  get currentDate() {
    return this._tmpDate;
  }

  get solution() {
    return this._tmpSolution;
  }

  handleClick() {
    window.open(this.solution , '_blank');
  }

  constructor(private router:Router ) { }

  ngOnInit() {
  }

}