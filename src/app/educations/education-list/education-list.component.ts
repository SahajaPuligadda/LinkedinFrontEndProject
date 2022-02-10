import { Component, OnInit } from '@angular/core';
import {Education} from "../education.model";
import {EducationService} from "../education.service";
import {ActivatedRoute, Router} from "@angular/router";
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.css']
})
export class EducationListComponent implements OnInit {
  educations: Education[] = [];
  id: number;

  constructor(private educationService: EducationService,
              private router: Router,
              private route: ActivatedRoute,
              public datepipe: DatePipe) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.uid;
    this.educationService.getEducations(this.id)
      .subscribe(data => {
          console.log("Education details backend!");
          console.log(data);
          this.educations = data;
          for(let i=0; i<data.length; i++) {
            this.educations[i].startDate =
              this.datepipe.transform(data[i].startDate, 'yyyy-MM-dd');
            this.educations[i].endDate =
              this.datepipe.transform(data[i].endDate, 'yyyy-MM-dd');
          }
          console.log("angular educations");
          console.log(this.educations);
        },
        error => {
          console.log("Could not load educations!");
          console.log(error);
        });
  }

  onNewEducation() {
    this.router.navigate(['new'], {relativeTo: this.route });
  }

}
