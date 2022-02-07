import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class SkillService {
  // private skills: string[] = [
  //   'Java', 'Python', 'MySQL', 'Angular', 'Springboot'
  // ];

  url_common: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  // getSkills() {
  //   return this.skills.slice();
  // }

  getSkills(id: number): Observable<any> {
    return this.http.get<any>(
      this.url_common + '/' + id + '/skills');
  }

}
