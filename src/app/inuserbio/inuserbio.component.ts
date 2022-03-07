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
    this.bioService.getBio(id)
      .subscribe(data => {
          this.bio = data;
        },
        error => {
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
