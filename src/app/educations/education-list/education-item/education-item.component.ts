import { Component, Input, OnInit } from '@angular/core';
import {Education} from "../../education.model";
import {EducationService} from "../../education.service";

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {
  @Input() edu: Education;

  constructor(private educationService: EducationService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.educationService.eduSelected.emit(this.edu);
  }

}
