import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InuserbioComponent } from './inuserbio/inuserbio.component';
import { EducationListComponent } from './educations/education-list/education-list.component';
import { EducationItemComponent } from './educations/education-list/education-item/education-item.component';
import { ExperienceListComponent } from './experiences/experience-list/experience-list.component';
import { ExperienceItemComponent } from './experiences/experience-list/experience-item/experience-item.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillItemComponent } from './skills-list/skill-item/skill-item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import { ExperienceDetailComponent } from './experiences/experience-detail/experience-detail.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EducationsComponent } from './educations/educations.component';
import { EducationDetailComponent } from './educations/education-detail/education-detail.component';
import { ExperienceEditComponent } from './experiences/experience-edit/experience-edit.component';
import { EducationEditComponent } from './educations/education-edit/education-edit.component';
import {DatePipe} from "@angular/common";
import { SkillNewComponent } from './skills-list/skill-new/skill-new.component';
import { BioEditComponent } from './inuserbio/bio-edit/bio-edit.component';
import { AboutEditComponent } from './inuserbio/about-edit/about-edit.component';
import { SkillEditComponent } from './skills-list/skill-edit/skill-edit.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

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
    PageNotFoundComponent,
    ExperienceDetailComponent,
    ExperiencesComponent,
    EducationsComponent,
    EducationDetailComponent,
    ExperienceEditComponent,
    EducationEditComponent,
    SkillNewComponent,
    BioEditComponent,
    AboutEditComponent,
    SkillEditComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
