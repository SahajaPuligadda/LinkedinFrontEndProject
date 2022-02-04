import { Component, OnInit } from '@angular/core';
import {Experience} from "./experience.model";
import {ExperienceService} from "./experience.service";

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
  providers: [ExperienceService]
})
export class ExperiencesComponent implements OnInit {
  selectedExp: Experience;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experienceService.expSelected.subscribe(
      (exp: Experience) => {
        this.selectedExp = exp;
      }
    )
  }

}
