import {Component, Input, OnInit} from '@angular/core';
import {Experience} from "../experience.model";
import {ExperienceService} from "../experience.service";
import {ActivatedRoute, Params, Route, Router} from "@angular/router";
import {DatePipe} from "@angular/common";

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
              private router: Router,
              public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        let temp = this.router.url.split('/');
        let uid = +temp[1];
        let eid = this.route.snapshot.params.id;
        console.log(this.router.url.split('/'));
        console.log("uid: " + uid);
        console.log("eid: " + eid);
        this.experienceService.getExperience(uid, eid)
          .subscribe(data => {
              console.log("Single Experience details backend!");
              console.log(data);
              this.exp = data;
              this.exp.company = data.companyName;
              this.exp.startDate =
                this.datepipe.transform(data.startDate, 'yyyy-MM-dd');
              this.exp.endDate =
                this.datepipe.transform(data.endDate, 'yyyy-MM-dd');
              console.log("angular single experience");
              console.log(this.exp);
            },
            error => {
              console.log("Could not load single experience!");
              console.log(error);
            });
      }
    );

  }

  onEditExperience() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
