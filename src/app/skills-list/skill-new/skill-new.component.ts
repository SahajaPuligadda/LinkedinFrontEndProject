import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Skill} from "../skill.model";
import {SkillService} from "../skill.service";

@Component({
  selector: 'app-skill-new',
  templateUrl: './skill-new.component.html',
  styleUrls: ['./skill-new.component.css']
})
export class SkillNewComponent implements OnInit {
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
    let uid = this.route.snapshot.params.uid;
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

  onBackSkill() {
    this.newSkillForm.reset();
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let name = '';

    this.newSkillForm = new FormGroup({
      'name': new FormControl(name, [Validators.required])
    });
  }

}
