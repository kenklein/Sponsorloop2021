import {Component} from '@angular/core';
import {STUDENT_DATA} from '../../_services/student-data-service';
import {COMPETITION_DATA} from '../../_services/competition-data-service';
import {CAROUSEL_DATA} from "../../_services/carousel-data-service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  studentData = STUDENT_DATA;
  competitionData = COMPETITION_DATA;
  carouselData = CAROUSEL_DATA;

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

  totalMaximumPoints(): number {
    const points = this.competitionData.map(it => {
      return it.runAmount + (it.skeelerAmount / 2) + it.bikeAmount / 4;
    });
    return Math.max(...points);
  }
}
