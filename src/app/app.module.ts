import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InuserbioComponent } from './inuserbio/inuserbio.component';
import { EducationListComponent } from './education-list/education-list.component';
import { EducationItemComponent } from './education-list/education-item/education-item.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { ExperienceItemComponent } from './experience-list/experience-item/experience-item.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillItemComponent } from './skills-list/skill-item/skill-item.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InuserbioComponent,
    EducationListComponent,
    EducationItemComponent,
    ExperienceListComponent,
    ExperienceItemComponent,
    SkillsListComponent,
    SkillItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
