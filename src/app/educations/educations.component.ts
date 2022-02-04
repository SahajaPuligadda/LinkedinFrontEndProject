import { Component, OnInit } from '@angular/core';
import {EducationService} from "./education.service";
import {Education} from "./education.model";

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css'],
  providers: [EducationService]
})
export class EducationsComponent implements OnInit {
  selectedEdu: Education;

  constructor(private educationService: EducationService) {
  }

  ngOnInit(): void {
    this.educationService.eduSelected.subscribe(
      (edu: Education) => {
        this.selectedEdu = edu;
      }
    )
  }
}

