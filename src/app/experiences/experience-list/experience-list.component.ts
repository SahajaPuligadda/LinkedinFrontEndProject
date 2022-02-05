import { Component, OnInit } from '@angular/core';
import {Experience} from "../experience.model";
import {ExperienceService} from "../experience.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private experienceService: ExperienceService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.experiences = this.experienceService.getExperiences();
  }

  onNewExperience() {
    this.router.navigate(['new'], {relativeTo: this.route });
  }

}
