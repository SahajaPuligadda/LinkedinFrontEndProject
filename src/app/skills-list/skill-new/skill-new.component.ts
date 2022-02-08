import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {UserValidationService} from "../../user-validation.service";
import {Skill} from "../skill.model";
import {SkillService} from "../skill.service";
import {SkillsListComponent} from "../skills-list.component";

@Component({
  selector: 'app-skill-new',
  templateUrl: './skill-new.component.html',
  styleUrls: ['./skill-new.component.css']
})
export class SkillNewComponent implements OnInit {
  // isSkillCreated: boolean;

  newSkillForm: FormGroup;
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
    let temp = this.router.url.split('/');
    let uid = +temp[1];
    console.log(this.newSkillForm.value);
    this.skill = new Skill(this.newSkillForm.value['name']);
    this.skillService.createSkill(uid, this.skill)
      .subscribe(data => {
          console.log("Created Skill successfully!");
          console.log(data);
          console.log(data.id);
          this.error = true;
          this.message = "Added Skill Successfully!";
          this.router.navigate(['../'], {relativeTo: this.route});
        },
        error => {
          this.error = true;
          console.log("Could not add skill!");
          console.log(error);
          this.message = "Skill already exists!";
        });
    this.newSkillForm.reset();
  }

  private initForm() {
    let name = '';

    this.newSkillForm = new FormGroup({
      'name': new FormControl(name, [Validators.required])
    });
  }

}
