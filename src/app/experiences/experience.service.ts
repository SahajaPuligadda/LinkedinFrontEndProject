import {Experience} from "./experience.model";
import {EventEmitter} from "@angular/core";

export class ExperienceService {
  expSelected = new EventEmitter<Experience>();

  private experiences: Experience[] = [
    new Experience('SDE Intern', 'Internship',
      'Kodem Legal Technologies', 'Hyderabad, Telangana, India',
      'Feb 2022', 'Jul 2022', ''),
    new Experience('SDE-1', 'Full-Time',
      'Kodem Legal Technologies', 'Hyderabad, Telangana, India',
      'Feb 2021', 'Feb 2022', '')
  ];

  getExperiences() {
    return this.experiences.slice();
  }
}
