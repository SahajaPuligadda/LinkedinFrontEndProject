import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {InuserbioComponent} from "./inuserbio/inuserbio.component";
import {SkillsListComponent} from "./skills-list/skills-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ExperiencesComponent} from "./experiences/experiences.component";
import {EducationsComponent} from "./educations/educations.component";
import {EducationDetailComponent} from "./educations/education-detail/education-detail.component";
import {ExperienceDetailComponent} from "./experiences/experience-detail/experience-detail.component";
import {EducationEditComponent} from "./educations/education-edit/education-edit.component";
import {ExperienceEditComponent} from "./experiences/experience-edit/experience-edit.component";
import {SkillNewComponent} from "./skills-list/skill-new/skill-new.component";
import {BioEditComponent} from "./inuserbio/bio-edit/bio-edit.component";
import {AboutEditComponent} from "./inuserbio/about-edit/about-edit.component";
import {SkillEditComponent} from "./skills-list/skill-edit/skill-edit.component";
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";


const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'not-found', component: PageNotFoundComponent},

  {path: ':uid/home', component: HomeComponent},
  {path: ':uid/about', component: InuserbioComponent},
  {path: ':uid/about/edit-bio', component: BioEditComponent},
  {path: ':uid/about/edit-about', component: AboutEditComponent},

  {path: ':uid/educations', component: EducationsComponent},
  {path: ':uid/experiences', component: ExperiencesComponent},

  {path: ':uid/skills', component: SkillsListComponent},
  {path: ':uid/skills/new', component: SkillNewComponent},

  {path: ':uid/educations/new', component: EducationEditComponent},
  {path: ':uid/experiences/new', component: ExperienceEditComponent},

  {path: ':uid/educations/:id', component: EducationDetailComponent},
  {path: ':uid/experiences/:id', component: ExperienceDetailComponent},

  {path: ':uid/skills/:id/edit', component: SkillEditComponent},
  {path: ':uid/educations/:id/edit', component: EducationEditComponent},
  {path: ':uid/experiences/:id/edit', component: ExperienceEditComponent},

  {path: '**', redirectTo: '/not-found'} //catch all unknown routes- at last
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
      {
        onSameUrlNavigation: 'reload'
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
