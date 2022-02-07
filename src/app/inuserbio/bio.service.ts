import {Bio} from "./bio.model";
import {HttpClient} from "@angular/common/http";
import {User} from "../user.model";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class BioService {
  // bio: Bio[] = [new Bio('Sahaja Puligadda',
  //   'Student at Vasavi College of Engineering',
  //   'Vasavi College of Engineering',
  //   'Hyderabad, Telangana, India',
  //   'https://www.lovesove.com/wp-content/uploads/2021/06/Girls-Dp-Original-Lovesove.jpg',
  //   'I\'m a sales rep dedicated to helping local Oklahoma City services ' +
  //   'businesses grow their customer base and decrease customer churn. I have 6 ' +
  //   'years of experience in local sales and I\'ve consistently met and exceeded ' +
  //   'my quota throughout my career. Within the last year, I\'ve topped our ' +
  //   'leaderboard six out of 10 months. On average, I close business 10% faster ' +
  //   'than my peers.'),
  // new Bio('Kodem Law',
  // 'Student at Kodem College of Engineering',
  // 'Vasavi Kodem of Engineering',
  // 'Kodem, Telangana, India',
  // 'https://www.lovesove.com/wp-content/uploads/2021/06/Girls-Dp-Original-Lovesove.jpg',
  // 'Kodem: Kodem: I\'m a sales rep dedicated to helping local Oklahoma City services ' +
  //   'businesses grow their customer base and decrease customer churn. ' +
  //   'I have 6 years of experience in local sales and I\'ve consistently met and ' +
  //   'exceeded my quota throughout my career. Within the last year, I\'ve topped ' +
  //   'our leaderboard six out of 10 months. On average, I close business 10% faster ' +
  //   'than my peers.')];

  url_common: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getBio(id: number): Observable<any> {
    return this.http.get<any>(
      this.url_common + '/' + id + '/about');
  }

  // getBio(id: number) {
  //   return this.bio[id];
  // }

}
