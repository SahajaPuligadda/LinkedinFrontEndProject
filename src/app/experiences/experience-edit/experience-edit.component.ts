import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ExperienceService} from "../experience.service";
import {Experience} from "../experience.model";

@Component({
  selector: 'app-experience-edit',
  templateUrl: './experience-edit.component.html',
  styleUrls: ['./experience-edit.component.css']
})
export class ExperienceEditComponent implements OnInit {
  id: number;
  editMode = false;
  UpdateExperienceForm: FormGroup;
  error: boolean;
  message: string;
  exp: Experience;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private experienceService: ExperienceService) { }

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
    this.exp = new Experience(this.UpdateExperienceForm.value['title'],
      this.UpdateExperienceForm.value['empType'],
      this.UpdateExperienceForm.value['company_name'],
      this.UpdateExperienceForm.value['location'],
      this.UpdateExperienceForm.value['startDate'],
      this.UpdateExperienceForm.value['endDate'],
      this.UpdateExperienceForm.value['description']);

    if(this.editMode) {
      let eid = this.route.snapshot.params.id;
      this.experienceService.updateExperience(uid, eid, this.exp)
        .subscribe(data => {
            this.error = true;
            this.message = "Updated Experience Successfully!";
            window.alert("Updated Experience Successfully!");
            this.router.navigate(['../'], {relativeTo: this.route});
          },
          error => {
            this.error = true;
            console.log(error);
            this.message = "Could not update experience!";
          });
      this.UpdateExperienceForm.reset();
    }
    else {
      this.experienceService.addExperience(uid, this.exp)
        .subscribe(data => {
            this.error = true;
            this.message = "Added Experience Successfully!";
            window.alert("Added Experience Successfully!");
            this.router.navigateByUrl("/" + uid + "/home");
          },
          error => {
            this.error = true;
            console.log(error);
            this.message = "Could not add experience!";
          });
      this.UpdateExperienceForm.reset();
    }
  }

  onBackExperience() {
    let uid = this.route.snapshot.params.uid;
    if(confirm("Are you sure to go back?")) {
      this.UpdateExperienceForm.reset();
      if(this.editMode) {
        this.router.navigate(['../'], {relativeTo: this.route});
      }
      else{
        this.router.navigateByUrl("/" + uid + "/home");
      }
    }
  }

  private initForm() {
    let uid = this.route.snapshot.params.uid;
    let title = "";
    let companyName = "";
    let empType = "";
    let location = "";
    let startDate = "";
    let endDate = "";
    let desc = "";

    if(this.editMode){
      let eid = this.route.snapshot.params.id;
      this.experienceService.getExperience(uid, eid)
        .subscribe(data => {
            title = data.title;
            companyName = data.companyName;
            empType = data.empType;
            location = data.location;
            startDate = (data.startDate).split('T')[0];
            startDate.split("-").reverse().join("/");
            endDate = (data.endDate).split('T')[0];
            endDate.split("-").reverse().join("/");
            desc = data.description;
            this.UpdateExperienceForm = new FormGroup({
              'title': new FormControl(title, [Validators.required]),
              'company_name': new FormControl(companyName, [Validators.required]),
              'empType': new FormControl(empType, [Validators.required]),
              'location': new FormControl(location, [Validators.required]),
              'startDate': new FormControl(startDate, [Validators.required]),
              'endDate': new FormControl(endDate, [Validators.required]),
              'description': new FormControl(desc, [Validators.required])
            },
              { validators:
                  this.experienceService.validateDates('startDate',
                    'endDate') }
              );
          },
          error => {
            console.log(error);
          });
    }

    this.UpdateExperienceForm = new FormGroup({
      'title': new FormControl(title, [Validators.required]),
      'company_name': new FormControl(companyName, [Validators.required]),
      'empType': new FormControl(empType, [Validators.required]),
      'location': new FormControl(location, [Validators.required]),
      'startDate': new FormControl(startDate, [Validators.required]),
      'endDate': new FormControl(endDate, [Validators.required]),
      'description': new FormControl(desc, [Validators.required])
    },
      { validators:
          this.experienceService.validateDates('startDate',
            'endDate') }
      );
  }

}
