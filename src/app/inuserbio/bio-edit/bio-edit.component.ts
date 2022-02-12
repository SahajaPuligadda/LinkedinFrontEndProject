import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BioService} from "../bio.service";
import {Bio} from "../bio.model";

// function checkImageValidator(url: string): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: boolean } | null => {
//     let image = new Image();
//     image.src = url;
//     // console.log(control.value);
//     if (image.width > 0) {
//       console.log("image exists");
//       return { 'imageValid': true };
//     } else {
//       console.log("image doesn't exist");
//     }
//     return null;
//   };
// }

@Component({
  selector: 'app-bio-edit',
  templateUrl: './bio-edit.component.html',
  styleUrls: ['./bio-edit.component.css']
})
export class BioEditComponent implements OnInit {

  editBioForm: FormGroup;
  error: boolean;
  name: string;
  bio: Bio;
  message: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private bioService: BioService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    let uid = this.route.snapshot.params.uid;
    this.bio = new Bio(this.editBioForm.value['name'],
      this.editBioForm.value['tagline'], this.editBioForm.value['workplace'],
      this.editBioForm.value['location'], this.editBioForm.value['photo'], '');
    this.bioService.updateBio(uid, this.bio)
      .subscribe(data => {
          console.log("Updated bio successfully!");
          console.log(data);
          console.log(data.id);
          this.error = true;
          this.message = "Updated Bio Successfully!";
          window.alert("Updated bio successfully!");
          this.router.navigateByUrl("/" + uid + "/home");
        },
        error => {
          this.error = true;
          console.log("Could not update bio!");
          console.log(error);
          this.message = "Could not update bio!";
        });
    this.editBioForm.reset();
  }

  onBackBio() {
    if(confirm("Are you sure to go back?")) {
      let uid = this.route.snapshot.params.uid;
      this.editBioForm.reset();
      this.router.navigateByUrl("/" + uid + "/home");
    }
  }

  private initForm() {
    let uid = this.route.snapshot.params.uid;
    let name = "";
    let tagline = "";
    let workplace = "";
    let location = "";
    let photo = "";

    this.bioService.getBio(uid)
      .subscribe(data => {
          // console.log("Profile details backend!");
          // console.log(data);
          name = data.name;
          tagline = data.tagline;
          workplace = data.workplace;
          location = data.location;
          photo = data.photo;
          this.editBioForm = new FormGroup({
            'name': new FormControl(name, [Validators.required]),
            'tagline': new FormControl(tagline, [Validators.required]),
            'workplace': new FormControl(workplace, [Validators.required]),
            'location': new FormControl(location, [Validators.required]),
            'photo': new FormControl(photo, [Validators.required])
          });
        },
        error => {
          console.log("Could not load profile details!");
          console.log(error);
        });

    this.editBioForm = new FormGroup({
      'name': new FormControl(name, [Validators.required]),
      'tagline': new FormControl(tagline, [Validators.required]),
      'workplace': new FormControl(workplace, [Validators.required]),
      'location': new FormControl(location, [Validators.required]),
      'photo': new FormControl(photo, [Validators.required])
    });
  }

}
