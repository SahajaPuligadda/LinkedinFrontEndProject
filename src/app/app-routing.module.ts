import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {InuserbioComponent} from "./inuserbio/inuserbio.component";
import {SkillsListComponent} from "./skills-list/skills-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ExperiencesComponent} from "./experiences/experiences.component";
import {EducationsComponent} from "./educations/educations.component";
import {EducationStartComponent} from "./educations/education-start/education-start.component";
import {EducationDetailComponent} from "./educations/education-detail/education-detail.component";
import {ExperienceStartComponent} from "./experiences/experience-start/experience-start.component";
import {ExperienceDetailComponent} from "./experiences/experience-detail/experience-detail.component";
import {EducationEditComponent} from "./educations/education-edit/education-edit.component";
import {ExperienceEditComponent} from "./experiences/experience-edit/experience-edit.component";
// import {RegisterComponent} from "./register/register.component";


const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  // {path: 'register', component: RegisterComponent},
  {path: 'about', component: InuserbioComponent},
  {path: 'educations', component: EducationsComponent, children: [
      {path: '', component: EducationStartComponent},
      {path: 'new', component: EducationEditComponent},
      {path: ':id', component: EducationDetailComponent},
      {path: ':id/edit', component: EducationEditComponent}
    ]},
  {path: 'experiences', component: ExperiencesComponent, children: [
      {path: '', component: ExperienceStartComponent},
      {path: 'new', component: ExperienceEditComponent},
      {path: ':id', component: ExperienceDetailComponent},
      {path: ':id/edit', component: ExperienceEditComponent}
    ]},
  {path: 'skills', component: SkillsListComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'} //catch all unknown routes- at last
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
