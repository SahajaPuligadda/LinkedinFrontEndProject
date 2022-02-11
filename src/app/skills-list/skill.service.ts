import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Skill} from "./skill.model";

@Injectable({providedIn: "root"})
export class SkillService {
  url_common: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getSkills(id: number): Observable<any> {
    return this.http.get<any>(
      this.url_common + '/' + id + '/skills');
  }

  deleteSkill(uid: number, sid: number): Observable<any> {
    return this.http.delete(
      this.url_common + '/' + uid + '/skills/' + sid);
  }

  createSkill(uid: number, skill: Skill): Observable<any> {
    return this.http.post<any>(
      this.url_common + '/' + uid + '/skills/new', skill);
  }

  getSkill(uid: number, sid: number) {
    return this.http.get<any>(
      this.url_common + '/' + uid + '/skills' + '/' + sid);
  }

  updateSkill(uid: number, sid: number, skill: Skill): Observable<any> {
    return this.http.put<any>(
      this.url_common + '/' + uid + '/skills/' + sid + '/edit', skill);
  }

}
