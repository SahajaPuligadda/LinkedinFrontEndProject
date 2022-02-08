import {Education} from "./education.model";
import {EventEmitter, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class EducationService {

  eduSelected = new EventEmitter<Education>();

  // private educations: Education[] = [
  //   new Education('Vasavi College of Engineering',
  //     'B.E.', 'ECE',
  //     '2018', '2022',
  //     9.79, ''),
  //   new Education('Chaitanya College',
  //     'Intermediate', 'MPC',
  //     '2016', '2018',
  //     96.7, '')
  // ];

  // getEducations() {
  //   return this.educations.slice();
  // }
  url_common: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  // getSkills() {
  //   return this.skills.slice();
  // }

  getEducations(id: number): Observable<any> {
    return this.http.get<any>(
      this.url_common + '/' + id + '/educations');
  }

  getEducation(uid: number, eid: number) {
    return this.http.get<any>(
      this.url_common + '/' + uid + '/educations' + '/' + eid);
  }
}
