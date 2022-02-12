import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "./user.model";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";

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

   registerUser(email: string, password: string, name: string): Observable<any> {
     return this.http.post<any>(
       this.url_common + '/register',
       {'email': email, 'password': password, 'name': name});
  }

  matchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }
      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return null;
      }
      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }
}
