import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})

export class DateComponent implements OnInit {
  someNumber: number = 10;
  dateMessage: string;

  constructor() {
    setInterval(() => {
      let currentDate = new Date();
      this.dateMessage = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    }  , 1000);
  }
  ngOnInit(): void {
  }

  addTwoNumbers(a : number,b: number){
    return a + b;
  }
}
