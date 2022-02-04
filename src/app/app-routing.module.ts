import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {InuserbioComponent} from "./inuserbio/inuserbio.component";
import {SkillsListComponent} from "./skills-list/skills-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ExperiencesComponent} from "./experiences/experiences.component";
import {EducationsComponent} from "./educations/educations.component";


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: InuserbioComponent},
  {path: 'education', component: EducationsComponent},
  {path: 'experience', component: ExperiencesComponent},
  {path: 'skills', component: SkillsListComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'} //catch all unknown routes- at last
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
