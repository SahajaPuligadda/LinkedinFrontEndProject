import {Component, Input, OnInit} from '@angular/core';
import { Bio } from './bio.model';
import {BioService} from "./bio.service";
import {ActivatedRoute, Router} from "@angular/router";

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
    // console.log(id);
    // this.bio = this.bioService.getBio(id);
    // console.log(this.bio);
    this.bioService.getBio(id)
      .subscribe(data => {
          console.log("Profile details backend!");
          console.log(data);
          this.bio = data;
          this.bio.photo = data.photo;
          this.bio.name = data.name;
          console.log("angular bio");
          console.log(this.bio);
        },
        error => {
          console.log("Could not load profile details!");
          console.log(error);
        });
  }

  onEditBio() {
    this.router.navigate(['edit-bio'], {relativeTo: this.route});
  }

  onEditAbout() {
    // console.log("this.bio.about: "+this.bio.about);
    this.router.navigate(['edit-about'], {relativeTo: this.route});
  }

}
