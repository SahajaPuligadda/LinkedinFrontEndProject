import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Education} from "../education.model";
import {EducationService} from "../education.service";

@Component({
  selector: 'app-education-edit',
  templateUrl: './education-edit.component.html',
  styleUrls: ['./education-edit.component.css']
})
export class EducationEditComponent implements OnInit {
  id: number;
  editMode = false;
  UpdateEducationForm: FormGroup;
  error: boolean;
  message: string;
  edu: Education;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private educationService: EducationService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] !=null;
      }
    );
    this.initForm();
  }

  onSubmit() {
    let uid = this.route.snapshot.params.uid;
    // console.log("Education params:");
    // console.log(this.route.snapshot.params);
    // console.log(this.UpdateEducationForm.value);
    this.edu = new Education(this.UpdateEducationForm.value['school'],
      this.UpdateEducationForm.value['degree'],
      this.UpdateEducationForm.value['field'],
      this.UpdateEducationForm.value['startDate'],
      this.UpdateEducationForm.value['endDate'],
      this.UpdateEducationForm.value['grade'],
      this.UpdateEducationForm.value['description']);

    if(this.editMode) {
      let eid = this.route.snapshot.params.id;
      this.educationService.updateEducation(uid, eid, this.edu)
        .subscribe(data => {
            console.log("Updated education successfully!");
            console.log(data);
            this.error = true;
            this.message = "Updated Education Successfully!";
            this.router.navigate(['../'], {relativeTo: this.route});
          },
          error => {
            this.error = true;
            console.log("Could not update education!");
            console.log(error);
            this.message = "Could not update education!";
          });
      this.UpdateEducationForm.reset();
    }
    else {
      this.educationService.addEducation(uid, this.edu)
        .subscribe(data => {
            console.log("Added education successfully!");
            console.log(data);
            this.error = true;
            this.message = "Added Education Successfully!";
            this.router.navigate(['../'], {relativeTo: this.route});
          },
          error => {
            this.error = true;
            console.log("Could not add education!");
            console.log(error);
            this.message = "Could not add education!";
          });
      this.UpdateEducationForm.reset();
    }
  }

  onBackEducation() {
    this.UpdateEducationForm.reset();
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let uid = this.route.snapshot.params.uid;
    let school = "";
    let degree = "";
    let field = "";
    let startDate = "";
    let endDate = "";
    let grade = "";
    let desc = "";

    if(this.editMode){
      let eid = this.route.snapshot.params.id;
      this.educationService.getEducation(uid, eid)
        .subscribe(data => {
            console.log("Education details backend for form!");
            console.log(data);
            school = data.school;
            degree = data.degree;
            field = data.field;
            grade = data.grade;
            startDate = (data.startDate).split('T')[0];
            startDate.split("-").reverse().join("/");
            endDate = (data.endDate).split('T')[0];
            endDate.split("-").reverse().join("/");
            desc = data.description;
            this.UpdateEducationForm = new FormGroup({
              'school': new FormControl(school, [Validators.required]),
              'degree': new FormControl(degree, [Validators.required]),
              'field': new FormControl(field, [Validators.required]),
              'startDate': new FormControl(startDate, [Validators.required]),
              'endDate': new FormControl(endDate, [Validators.required]),
              'grade': new FormControl(grade, [Validators.required]),
              'description': new FormControl(desc, [Validators.required])
            });
          },
          error => {
            console.log("Could not load education details!");
            console.log(error);
          });
    }

    this.UpdateEducationForm = new FormGroup({
      'school': new FormControl(school, [Validators.required]),
      'degree': new FormControl(degree, [Validators.required]),
      'field': new FormControl(field, [Validators.required]),
      'startDate': new FormControl(startDate, [Validators.required]),
      'endDate': new FormControl(endDate, [Validators.required]),
      'grade': new FormControl(grade, [Validators.required]),
      'description': new FormControl(desc, [Validators.required])
    });
  }

}
