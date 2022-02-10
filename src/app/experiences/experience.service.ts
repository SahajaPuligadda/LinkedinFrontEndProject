import {Experience} from "./experience.model";
import {EventEmitter, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class ExperienceService {
  expSelected = new EventEmitter<Experience>();

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

  updateExperience(uid: number, eid: number, exp: Experience): Observable<any> {
    return this.http.put<any>(
      this.url_common + '/' + uid + '/experiences/' + eid + '/edit', exp);
  }

  addExperience(uid: number, exp: Experience): Observable<any> {
    return this.http.post<any>(
      this.url_common + '/' + uid + '/experiences/new', exp);
  }

  deleteExperience(uid: number, eid: number): Observable<any> {
    return this.http.delete(
      this.url_common + '/' + uid + '/experiences/' + eid + '/delete');
  }

}
