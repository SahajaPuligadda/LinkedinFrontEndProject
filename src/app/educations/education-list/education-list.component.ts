import { Component, OnInit } from '@angular/core';
import {Education} from "../education.model";
import {EducationService} from "../education.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.css']
})
export class EducationListComponent implements OnInit {
  educations: Education[] = [];

  constructor(private educationService: EducationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(){
    this.educations = this.educationService.getEducations();
  }

  onNewEducation() {
    this.router.navigate(['new'], {relativeTo: this.route });
  }

}
