import { Component, OnInit } from '@angular/core';
import {Experience} from "../experience.model";
import {ExperienceService} from "../experience.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent implements OnInit {
  experiences: Experience[] = [];
  id: number;

  constructor(private experienceService: ExperienceService,
              private router: Router,
              private route: ActivatedRoute,
              public datepipe: DatePipe) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.uid;
    this.experienceService.getExperiences(this.id)
      .subscribe(data => {
          this.experiences = data;
          for(let i=0; i<data.length; i++) {
            this.experiences[i].startDate =
              this.datepipe.transform(data[i].startDate, 'yyyy-MM-dd');
            this.experiences[i].endDate =
              this.datepipe.transform(data[i].endDate, 'yyyy-MM-dd');
          }
        },
        error => {
          console.log(error);
        });
  }

  onNewExperience() {
    this.router.navigate(['../experiences/new'], {relativeTo: this.route });
  }

}
