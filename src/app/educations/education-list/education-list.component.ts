import { Component, OnInit } from '@angular/core';
import {Education} from "../education.model";
import {EducationService} from "../education.service";

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.css']
})
export class EducationListComponent implements OnInit {
  educations: Education[] = [];

  constructor(private educationService: EducationService) { }

  ngOnInit(){
    this.educations = this.educationService.getEducations();
  }


}
