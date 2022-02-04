import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InuserbioComponent } from './inuserbio/inuserbio.component';
import { EducationListComponent } from './educations/education-list/education-list.component';
import { EducationItemComponent } from './educations/education-list/education-item/education-item.component';
import { ExperienceListComponent } from './experiences/experience-list/experience-list.component';
import { ExperienceItemComponent } from './experiences/experience-list/experience-item/experience-item.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillItemComponent } from './skills-list/skill-item/skill-item.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import {LoginComponent} from "./login/login.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import { ExperienceDetailComponent } from './experiences/experience-detail/experience-detail.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EducationsComponent } from './educations/educations.component';
import { EducationDetailComponent } from './educations/education-detail/education-detail.component';

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
    SkillItemComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    ExperienceDetailComponent,
    ExperiencesComponent,
    EducationsComponent,
    EducationDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
