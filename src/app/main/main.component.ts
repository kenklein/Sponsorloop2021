import { Component} from '@angular/core';
import { STUDENT_DATA } from '../../_services/student-data-service';
import {CAROUSEL_ITEMS} from '../../_services/carousel-item-service';
import {COMPETITION_DATA} from '../../_services/competition-data-service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  carouselItems = CAROUSEL_ITEMS;
  studentData = STUDENT_DATA;
  competitionData = COMPETITION_DATA;

  constructor() { }


  onSectionChange(sectionId: string) {
  }

  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }

}
