import {Component, Input, OnInit} from '@angular/core';
import {Experience} from "../experience.model";

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css']
})
export class ExperienceDetailComponent implements OnInit {
  @Input() exp: Experience;

  constructor() { }

  ngOnInit(): void {
  }

}
