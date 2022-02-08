import {Experience} from "./experience.model";
import {EventEmitter, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class ExperienceService {
  expSelected = new EventEmitter<Experience>();

  // private experiences: Experience[] = [
  //   new Experience('SDE Intern', 'Internship',
  //     'Kodem Legal Technologies', 'Hyderabad, Telangana, India',
  //     'Feb 2022', 'Jul 2022', ''),
  //   new Experience('SDE-1', 'Full-Time',
  //     'Kodem Legal Technologies', 'Hyderabad, Telangana, India',
  //     'Feb 2021', 'Feb 2022', '')
  // ];
  //
  // getExperiences() {
  //   return this.experiences.slice();
  // }
  //
  // getExperience(index: number) {
  //   return this.experiences[index];
  // }

  url_common: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getExperiences(id: number): Observable<any> {
    return this.http.get<any>(
      this.url_common + '/' + id + '/experiences');
  }

  getExperience(uid: number, eid: number) {
    return this.http.get<any>(
      this.url_common + '/' + uid + '/experiences' + '/' + eid);
  }
}
