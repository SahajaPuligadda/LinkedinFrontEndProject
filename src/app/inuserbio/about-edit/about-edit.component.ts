import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BioService} from "../bio.service";

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.css']
})
export class AboutEditComponent implements OnInit {

  editAboutForm: FormGroup;
  error: boolean;
  name: string;
  about: string;
  message: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private bioService: BioService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    let uid = this.route.snapshot.params.uid;
    this.about = this.editAboutForm.value['about'];
    this.bioService.updateAbout(uid, this.about)
      .subscribe(data => {
          console.log("Updated about successfully!");
          console.log(data);
          console.log(data.id);
          this.error = true;
          this.message = "Updated About Successfully!";
          this.router.navigate(['../'], {relativeTo: this.route});
        },
        error => {
          this.error = true;
          console.log("Could not update about!");
          console.log(error);
          this.message = "Could not update about!";
        });
    this.editAboutForm.reset();
  }

  onBackAbout() {
    this.editAboutForm.reset();
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let uid = this.route.snapshot.params.uid;
    let about = "";
    this.bioService.getBio(uid)
      .subscribe(data => {
          about = data.about;
          this.editAboutForm = new FormGroup({
            'about': new FormControl(about, [Validators.required])
          });
        },
        error => {
          console.log("Could not load profile details!");
          console.log(error);
        });
    this.editAboutForm = new FormGroup({
      'about': new FormControl(about, [Validators.required])
    });
  }


}
