import {Bio} from "./bio.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class BioService {
  url_common: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getBio(id: number): Observable<any> {
    return this.http.get<any>(
      this.url_common + '/' + id + '/about');
  }

  updateAbout(uid: number, about: string): Observable<any> {
    return this.http.put<any>(
      this.url_common + '/' + uid + '/about/edit-about',
      new Bio('','','','','', about));
  }

  updateBio(uid: number, bio: Bio): Observable<any> {
    return this.http.put<any>(
      this.url_common + '/' + uid + '/about/edit-bio', bio);
  }

}
