import { Component, OnInit } from '@angular/core';
import {SkillService} from "./skill.service";

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css'],
  providers: [SkillService]
})
export class SkillsListComponent implements OnInit {
  skills: string[] = [];

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.skills = this.skillService.getSkills();
  }

}
