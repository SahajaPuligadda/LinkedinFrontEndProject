import { Component, OnInit } from '@angular/core';
import { Bio } from './bio.model';
import {BioService} from "./bio.service";

@Component({
  selector: 'app-inuserbio',
  templateUrl: './inuserbio.component.html',
  styleUrls: ['./inuserbio.component.css'],
  providers: [BioService]
})
export class InuserbioComponent implements OnInit {
  bio: Bio;

  constructor(private bioService: BioService) { }

  ngOnInit(){
    this.bio = this.bioService.getBio();
  }

}
