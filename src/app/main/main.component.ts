import { Component, OnInit } from '@angular/core';
import { STUDENT_DATA } from '../../_services/student-data-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  studentData = STUDENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
