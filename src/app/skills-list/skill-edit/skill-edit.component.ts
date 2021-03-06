import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Skill} from "../skill.model";
import {ActivatedRoute, Router} from "@angular/router";
import {SkillService} from "../skill.service";

@Component({
  selector: 'app-skill-edit',
  templateUrl: './skill-edit.component.html',
  styleUrls: ['./skill-edit.component.css']
})
export class SkillEditComponent implements OnInit {

  editSkillForm: FormGroup;
  error: boolean;
  name: string;
  skill: Skill;
  message: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private skillService: SkillService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    let uid = this.route.snapshot.params.uid;
    let sid = this.route.snapshot.params.id;
    this.skill = new Skill(this.editSkillForm.value['name']);
    this.skillService.updateSkill(uid, sid, this.skill)
      .subscribe(data => {
          this.error = true;
          this.message = "Updated Skill Successfully!";
          window.alert("Updated Skill Successfully!");
          this.router.navigateByUrl('/' + uid + '/home');
        },
        error => {
          this.error = true;
          console.log(error);
          this.message = "Could not update skill!";
        });
    this.editSkillForm.reset();
  }

  onBackSkill() {
    if(confirm("Are you sure to go back?")) {
      let uid = this.route.snapshot.params.uid;
      this.editSkillForm.reset();
      this.router.navigateByUrl('/' + uid + '/home');
    }
  }

  private initForm() {
    let name = '';
    let uid = this.route.snapshot.params.uid;
    let sid = this.route.snapshot.params.id;

    this.skillService.getSkill(uid, sid)
      .subscribe(data => {
          name = data.skillName;
          this.editSkillForm = new FormGroup({
            'name': new FormControl(name, [Validators.required])
          });
        },
        error => {
          console.log(error);
        });

    this.editSkillForm = new FormGroup({
      'name': new FormControl(name, [Validators.required])
    });
  }

}
