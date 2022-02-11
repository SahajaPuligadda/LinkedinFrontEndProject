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
    let temp = this.router.url.split('/');
    let uid = +temp[1];
    let sid = this.skill.id;
    //console.log(this.router.url);
    console.log("uid: " + uid);
    console.log("sid: " + sid);
    this.skillService.deleteSkill(uid, sid)
      .subscribe(data => {
          console.log("Deleted Skill successfully!");
          console.log(data);
          this.isSkillDeleted.emit(true);
        },
        error => {
          this.isSkillDeleted.emit(false);
          console.log("Could not delete skill!");
          console.log(error);
        });
  }

  onEditSkill() {
    let sid = this.skill.id;
    this.router.navigate([sid + '/edit'], {relativeTo: this.route});
  }
}
