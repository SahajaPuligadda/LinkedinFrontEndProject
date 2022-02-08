import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() uid: number;

  linkedinlogo = 'https://image.flaticon.com/icons/png/512/408/408703.png';
  // @Output() featureSelected = new EventEmitter<string>();
  //
  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.uid;
    // console.log(id);
    this.uid = id;
  }

  onLogout() {
    window.alert("Logged out successfully!");
    this.router.navigateByUrl("/login");
  }

}
