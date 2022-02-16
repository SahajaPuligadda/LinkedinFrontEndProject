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
        this.educationService.getEducation(uid, eid)
          .subscribe(data => {
              this.edu = data;
              this.edu.startDate =
                this.datepipe.transform(data.startDate, 'yyyy-MM-dd');
              this.edu.endDate =
                this.datepipe.transform(data.endDate, 'yyyy-MM-dd');
            },
            error => {
              console.log(error);
            });
      }
    );
  }

  onEditEducation() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onBackEducation() {
    let uid = this.route.snapshot.params.uid;
    this.router.navigateByUrl('/' + uid + '/home');
  }

  onDeleteEducation() {
    if(confirm("Are you sure to delete education?")) {
      let temp = this.router.url.split('/');
      let uid = +temp[1];
      let eid = this.route.snapshot.params.id;
      this.educationService.deleteEducation(uid, eid)
        .subscribe(data => {
            window.alert("Deleted Education successfully!");
            this.router.navigateByUrl("/" + uid + "/home");
          },
          error => {
            console.log(error);
          });
    }
  }

}
