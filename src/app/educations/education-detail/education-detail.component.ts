import {Component, OnInit} from '@angular/core';
import {Education} from "../education.model";
import {EducationService} from "../education.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent implements OnInit {
  edu: Education = new Education('','','','','', 0.0, '');

  constructor(private educationService: EducationService,
              private route: ActivatedRoute,
              private router: Router,
              public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        let temp = this.router.url.split('/');
        let uid = +temp[1];
        let eid = this.route.snapshot.params.id;
        // console.log(this.route.snapshot.params);
        console.log("uid: " + uid);
        console.log("eid: " + eid);
        this.educationService.getEducation(uid, eid)
          .subscribe(data => {
              console.log("Single Education details backend!");
              console.log(data);
              this.edu = data;
              this.edu.startDate =
                this.datepipe.transform(data.startDate, 'yyyy-MM-dd');
              this.edu.endDate =
                this.datepipe.transform(data.endDate, 'yyyy-MM-dd');
              console.log("angular single education");
              console.log(this.edu);
            },
            error => {
              console.log("Could not load single education!");
              console.log(error);
            });
      }
    );
  }

  onEditEducation() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onBackEducation() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteEducation() {
    let temp = this.router.url.split('/');
    let uid = +temp[1];
    let eid = this.route.snapshot.params.id;
    //console.log(this.router.url);
    console.log("uid: " + uid);
    console.log("eid: " + eid);
    this.educationService.deleteEducation(uid, eid)
      .subscribe(data => {
          console.log("Deleted Education successfully!");
          console.log(data);
          this.router.navigate(['../'], {relativeTo: this.route});
        },
        error => {
          console.log("Could not delete education!");
          console.log(error);
        });
  }

}
