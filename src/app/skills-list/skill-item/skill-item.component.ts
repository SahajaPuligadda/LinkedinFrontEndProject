import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Skill} from "../skill.model";
import {SkillService} from "../skill.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Education} from "../../educations/education.model";

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {
  @Input() skill: Skill;
  @Output() isSkillDeleted: EventEmitter<boolean> = new EventEmitter<boolean>();
  // sid: number;

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
          // this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          //   console.log(this.router.url);
          //   this.router.navigate(['../skills'], {relativeTo: this.route});
          //   console.log(this.router.url);
          // });
          // this.router.navigate(['../skills'], {relativeTo: this.route});
        },
        error => {
          this.isSkillDeleted.emit(false);
          console.log("Could not delete skill!");
          console.log(error);
        });
  }

}
