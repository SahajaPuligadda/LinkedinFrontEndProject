import {Education} from "./education.model";
import {EventEmitter} from "@angular/core";

export class EducationService {

  eduSelected = new EventEmitter<Education>();

  private educations: Education[] = [
    new Education('Vasavi College of Engineering',
      'B.E.', 'ECE',
      '2018', '2022',
      9.79, ''),
    new Education('Chaitanya College',
      'Intermediate', 'MPC',
      '2016', '2018',
      96.7, '')
  ];

  getEducations() {
    return this.educations.slice();
  }
}
