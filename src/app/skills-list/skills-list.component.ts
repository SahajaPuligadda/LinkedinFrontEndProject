import {Component, OnInit} from '@angular/core';
import {SkillService} from "./skill.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Skill} from "./skill.model";

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
          this.skills = data;
        },
        error => {
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
