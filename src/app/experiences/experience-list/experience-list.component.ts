import { Component, OnInit } from '@angular/core';
import {Experience} from "../experience.model";
import {ExperienceService} from "../experience.service";

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.experiences = this.experienceService.getExperiences();
  }

}
