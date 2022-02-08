import {Component, OnInit, ViewChild} from '@angular/core';
import {SkillService} from "./skill.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Skill} from "./skill.model";
import {SkillNewComponent} from "./skill-new/skill-new.component";

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css'],
  providers: [SkillService]
})
export class SkillsListComponent implements OnInit {
  skills: Skill[] = [];
  // createNewSkill = false;

  constructor(private skillService: SkillService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    //this.skills = this.skillService.getSkills();
    let id = this.route.snapshot.params.uid;
    this.skillService.getSkills(id)
      .subscribe(data => {
          console.log("Skill details backend!");
          console.log(data);
          // for(let i=0; i<data.length; i++) {
          //   this.skills.push(data[i].skillName);
          // }
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
    this.ngOnInit();
  }

  onNewSkill() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
