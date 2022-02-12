import {Component, OnInit} from '@angular/core';
import {SkillService} from "./skill.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Skill} from "./skill.model";
import {UserValidationService} from "../user-validation.service";

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css'],
  providers: [SkillService]
})
export class SkillsListComponent implements OnInit {
  skills: Skill[] = [];

  constructor(private skillService: SkillService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params.uid;
    this.skillService.getSkills(id)
      .subscribe(data => {
          console.log("Skill details backend!");
          console.log(data);
          this.skills = data;
          console.log("angular skills");
          console.log(this.skills);
        },
        error => {
          console.log("Could not load skills!");
          console.log(error);
        });
  }

  whenSkillDeleted(isSkillDel: boolean) {
    if(isSkillDel)
      this.ngOnInit();
  }

  onNewSkill() {
    this.router.navigate(['../skills/new'], {relativeTo: this.route});
  }

}
