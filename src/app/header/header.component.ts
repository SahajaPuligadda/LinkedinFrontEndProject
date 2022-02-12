import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserValidationService} from "../user-validation.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() uid: number;

  linkedinlogo = 'https://image.flaticon.com/icons/png/512/408/408703.png';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserValidationService) { }

  ngOnInit(): void {
    this.uid = this.route.snapshot.params.uid;
  }

  onIntroduction() {
    document.getElementById("about").scrollIntoView({behavior: 'smooth'});
  }

  onEducation() {
    document.getElementById("educations").scrollIntoView({behavior: 'smooth'});
  }

  onExperience() {
    document.getElementById("experiences").scrollIntoView({behavior: 'smooth'});
  }

  onSkills() {
    document.getElementById("skills").scrollIntoView({behavior: 'smooth'});
  }

  onLogout() {
    window.alert("Logged out successfully!");
    this.router.navigateByUrl("/login");
  }

}
