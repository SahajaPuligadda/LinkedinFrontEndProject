import { Component, Input, OnInit } from '@angular/core';
import {Education} from "../../education.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {
  @Input() edu: Education;
  @Input() index: number;
  @Input() uid: number;

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  onClickEducation() {
  // :uid/educations/:id
    this.router.navigate(['../educations/' + this.index], {relativeTo: this.route});
  }

}
