import {Component, Input, OnInit} from '@angular/core';
import {Experience} from "../../experience.model";

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {
  @Input() exp: Experience;
  @Input() index: number;
  @Input() uid: number;

  ngOnInit(): void {
  }

}
