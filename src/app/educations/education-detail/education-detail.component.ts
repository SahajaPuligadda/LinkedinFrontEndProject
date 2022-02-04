import {Component, Input, OnInit} from '@angular/core';
import {Education} from "../education.model";

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent implements OnInit {
  @Input() edu: Education;

  constructor() { }

  ngOnInit(): void {
  }

}
