import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Skill} from "../skill.model";
import {SkillService} from "../skill.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {
  @Input() skill: Skill;
  @Output() isSkillDeleted: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private skillService: SkillService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onDelete(){
    if(confirm("Are you sure to delete " + this.skill.skillName + " skill?")) {
      let temp = this.router.url.split('/');
      let uid = +temp[1];
      let sid = this.skill.id;
      this.skillService.deleteSkill(uid, sid)
        .subscribe(data => {
            window.alert("Deleted Skill successfully!");
            this.isSkillDeleted.emit(true);
          },
          error => {
            this.isSkillDeleted.emit(false);
            console.log(error);
          });
    }
  }

  onEditSkill() {
    let sid = this.skill.id;
    this.router.navigate(['../skills/' + sid + '/edit'], {relativeTo: this.route});
  }
}
