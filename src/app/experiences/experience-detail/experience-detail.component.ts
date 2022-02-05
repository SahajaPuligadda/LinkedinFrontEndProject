import {Component, Input, OnInit} from '@angular/core';
import {Experience} from "../experience.model";
import {ExperienceService} from "../experience.service";
import {ActivatedRoute, Params, Route, Router} from "@angular/router";

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css']
})
export class ExperienceDetailComponent implements OnInit {
  exp: Experience;
  id: number;

  constructor(private experienceService: ExperienceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.exp = this.experienceService.getExperience(this.id);
      }
    );
  }

  onEditExperience() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
