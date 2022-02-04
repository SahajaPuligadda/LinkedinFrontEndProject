import {Component, Input, OnInit} from '@angular/core';
import {Experience} from "../../experience.model";
import {ExperienceService} from "../../experience.service";

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {
  @Input() exp: Experience;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.experienceService.expSelected.emit(this.exp);
  }

}
