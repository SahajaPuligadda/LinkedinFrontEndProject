import {Component, OnInit} from '@angular/core';
import {Experience} from "../experience.model";
import {ExperienceService} from "../experience.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css']
})
export class ExperienceDetailComponent implements OnInit {
  exp: Experience = new Experience('','','','','', '', '');

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
        this.experienceService.getExperience(uid, eid)
          .subscribe(data => {
              this.exp = data;
              this.exp.startDate =
                this.datepipe.transform(data.startDate, 'yyyy-MM-dd');
              this.exp.endDate =
                this.datepipe.transform(data.endDate, 'yyyy-MM-dd');
            },
            error => {
              console.log(error);
            });
      }
    );

  }

  onEditExperience() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onBackExperience() {
    let uid = this.route.snapshot.params.uid;
    this.router.navigateByUrl('/' + uid + '/home');
  }

  onDeleteExperience() {
    if(confirm("Are you sure to delete experience?")) {
      let temp = this.router.url.split('/');
      let uid = +temp[1];
      let eid = this.route.snapshot.params.id;
      this.experienceService.deleteExperience(uid, eid)
        .subscribe(data => {
            this.router.navigateByUrl("/" + uid + "/home");
          },
          error => {
            console.log(error);
          });
    }
  }

}
