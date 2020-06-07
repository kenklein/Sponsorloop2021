import { Component} from '@angular/core';
import { STUDENT_DATA } from '../../_services/student-data-service';
import {COMPETITION_DATA} from '../../_services/competition-data-service';
import {FACEBOOK_DATA} from '../../_services/facebook-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  studentData = STUDENT_DATA;
  competitionData = COMPETITION_DATA;
  facebookData = FACEBOOK_DATA;

  constructor() { }
  getTotal() {
    let total = 0;
    for (const student of this.studentData) {
      if (student.amountRaised != null) {
        total += student.amountRaised;
      }
    }
    return total;
  }
}
