import {Component, Input, OnInit} from '@angular/core';
import {Experience} from "../../experience.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {
  @Input() exp: Experience;
  @Input() index: number;
  @Input() uid: number;

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  onClickExperience() {
    // :uid/experiences/:id
    console.log("index: " + this.index);
    console.log("uid: " + this.uid);
    console.log(this.router.url);
    this.router.navigate(['../experiences/' + this.index], {relativeTo: this.route});
  }


}
