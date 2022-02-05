import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: "root"})
export class UserValidationService{
    constructor(private http: HttpClient) {
    }

    validateUser(email: string, password: string) {
      this.http.post(
        'http://localhost:8080/login',
        [email, password]).subscribe(response => {
          console.log(response);
      });
    }
}
