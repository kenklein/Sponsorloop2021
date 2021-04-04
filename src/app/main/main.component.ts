import {Component} from '@angular/core';
import {STUDENT_DATA} from '../../_services/student-data-service';
import {COMPETITION_DATA} from '../../_services/competition-data-service';
import {FACEBOOK_DATA} from '../../_services/facebook-service';
import {Competition} from '../../_models/competition';

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


  getRanBarType(competition: Competition): string {
    return this.getBarType(this.getRanPercentage(competition));
  }

  getSkeeleredBarType(competition: Competition): string {
    return this.getBarType(this.getSkeeleredPercentage(competition));
  }

  getBikedBarType(competition: Competition): string {
    return this.getBarType(this.getBikedPercentage(competition));
  }

  getBarType(percentage: number): string {
    if (percentage === 100) {
      return 'success';
    } else if (percentage >= 50) {
      return 'warning';
    } else {
      return 'danger';
    }
  }

  getRanPercentage(competition: Competition): number {
    const maxRan = Math.max(...this.competitionData.map(thing => thing.runAmount));
    return (competition.runAmount / maxRan)  * 100;
  }


  getSkeeleredPercentage(competition: Competition): number {
    const maxSkeelered = Math.max(...this.competitionData.map(thing => thing.skeelerAmount));
    return (competition.skeelerAmount / maxSkeelered)  * 100;
  }

  getBikedPercentage(competition: Competition): number {
    const maxBiked = Math.max(...this.competitionData.map(thing => thing.bikeAmount));
    return (competition.bikeAmount / maxBiked)  * 100;
  }

}
