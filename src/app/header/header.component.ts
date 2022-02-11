import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() uid: number;

  linkedinlogo = 'https://image.flaticon.com/icons/png/512/408/408703.png';

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.uid = this.route.snapshot.params.uid;
  }

  onLogout() {
    window.alert("Logged out successfully!");
    this.router.navigateByUrl("/login");
  }

}
