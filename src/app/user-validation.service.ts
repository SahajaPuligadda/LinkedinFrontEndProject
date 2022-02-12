import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "./user.model";
import {Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class UserValidationService{
    scrollId = 'intro';
    url_common: string = 'http://localhost:8080';

    constructor(private http: HttpClient) {
    }

    validateUser(user: User): Observable<any> {
      return this.http.post<any>(
        this.url_common + '/login', user);
    }

   registerUser(user: User): Observable<any> {
     return this.http.post<any>(
       this.url_common + '/register', user);
  }
}
