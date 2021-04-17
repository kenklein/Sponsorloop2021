import {Component, Input, OnInit} from '@angular/core';
import {Competition} from '../../../_models/competition';

@Component({
  selector: 'app-comp-bar',
  templateUrl: './comp-bar.component.html',
  styleUrls: ['./comp-bar.component.css']
})
export class CompBarComponent {

  @Input()
  public competition: Competition;

  @Input()
  public maxPoints: number;
  constructor() { }

  calculateRunPercentage() {
    return 100 / this.maxPoints * this.competition.runAmount;
  }

  calculateSkeelerPercentage() {
    return 100 / this.maxPoints * (this.competition.skeelerAmount / 2);
  }

  calculateBikePercentage() {
    return 100 / this.maxPoints * (this.competition.bikeAmount / 4);
  }

}
