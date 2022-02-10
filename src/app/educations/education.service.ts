import {Education} from "./education.model";
import {EventEmitter, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class EducationService {
  eduSelected = new EventEmitter<Education>();

  url_common: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getEducations(id: number): Observable<any> {
    return this.http.get<any>(
      this.url_common + '/' + id + '/educations');
  }

  getEducation(uid: number, eid: number) {
    return this.http.get<any>(
      this.url_common + '/' + uid + '/educations' + '/' + eid);
  }

  updateEducation(uid: number, eid: number, edu: Education): Observable<any> {
    return this.http.put<any>(
      this.url_common + '/' + uid + '/educations/' + eid + '/edit', edu);
  }

  addEducation(uid: number, edu: Education): Observable<any> {
    return this.http.post<any>(
      this.url_common + '/' + uid + '/educations/new', edu);
  }

  deleteEducation(uid: number, eid: number): Observable<any> {
    return this.http.delete(
      this.url_common + '/' + uid + '/educations/' + eid + '/delete');
  }

}
