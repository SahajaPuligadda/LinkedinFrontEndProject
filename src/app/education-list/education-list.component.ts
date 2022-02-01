import { Component, OnInit } from '@angular/core';
import {Education} from "./education.model";

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.css']
})
export class EducationListComponent implements OnInit {
  educations: Education[] = [
    new Education('Vasavi College of Engineering',
      'B.E.', 'ECE',
      '2018', '2022',
      9.79, ''),
    new Education('Chaitanya College',
      'Intermediate', 'MPC',
      '2016', '2018',
      96.7, '')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
