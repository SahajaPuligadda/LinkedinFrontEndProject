import { Component, OnInit } from '@angular/core';
import {Experience} from "./experience.model";

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent implements OnInit {
  experiences: Experience[] = [
    new Experience('SDE Intern', 'Internship',
      'Kodem Legal Technologies', 'Hyderabad, Telangana, India',
      'Feb 2022', 'Jul 2022', ''),
    new Experience('SDE-1', 'Full-Time',
      'Kodem Legal Technologies', 'Hyderabad, Telangana, India',
      'Feb 2021', 'Feb 2022', '')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
