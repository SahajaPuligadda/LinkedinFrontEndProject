import {Component, Input, OnInit} from '@angular/core';
import { Bio } from './bio.model';
import {BioService} from "./bio.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserValidationService} from "../user-validation.service";

@Component({
  selector: 'app-inuserbio',
  templateUrl: './inuserbio.component.html',
  styleUrls: ['./inuserbio.component.css'],
  providers: [BioService]
})
export class InuserbioComponent implements OnInit {
  @Input() uid: number;

  bio: Bio = new Bio('', '', '','','','');

  constructor(private bioService: BioService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(){
    let id = this.route.snapshot.params.uid;
    this.bioService.getBio(id)
      .subscribe(data => {
          console.log("Profile details backend!");
          console.log(data);
          this.bio = data;
          console.log("angular bio");
          console.log(this.bio);
        },
        error => {
          console.log("Could not load profile details!");
          console.log(error);
        });
  }

  onEditBio() {
    this.router.navigate(['../about/edit-bio'], {relativeTo: this.route});
  }

  onEditAbout() {
    this.router.navigate(['../about/edit-about'], {relativeTo: this.route});
  }

}
