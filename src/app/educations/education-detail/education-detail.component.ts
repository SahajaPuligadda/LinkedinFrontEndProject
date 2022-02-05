import {Component, OnInit} from '@angular/core';
import {Education} from "../education.model";
import {EducationService} from "../education.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent implements OnInit {
  edu: Education;
  id: number;

  constructor(private educationService: EducationService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.edu = this.educationService.getEducation(this.id);
      }
    );
  }

  onEditEducation() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
