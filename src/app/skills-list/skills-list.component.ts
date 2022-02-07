import { Component, OnInit } from '@angular/core';
import {SkillService} from "./skill.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css'],
  providers: [SkillService]
})
export class SkillsListComponent implements OnInit {
  skills: string[] = [];

  constructor(private skillService: SkillService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //this.skills = this.skillService.getSkills();
    let id = this.route.snapshot.params.uid;
    this.skillService.getSkills(id)
      .subscribe(data => {
          console.log("Skill details backend!");
          console.log(data);
          for(let i=0; i<data.length; i++) {
            this.skills.push(data[i].skillName);
          }
          // this.skills = data.skillname;
          console.log("angular skills");
          console.log(this.skills);
        },
        error => {
          console.log("Could not load skills!");
          console.log(error);
        });
  }

}
