import {Bio} from "./bio.model";

export class BioService {
  bio: Bio = new Bio('Sahaja Puligadda',
    'Student at Vasavi College of Engineering',
    'Vasavi College of Engineering',
    'Hyderabad, Telangana, India',
    'https://www.lovesove.com/wp-content/uploads/2021/06/Girls-Dp-Original-Lovesove.jpg',
    'I\'m a sales rep dedicated to helping local Oklahoma City services businesses grow their customer base and decrease customer churn. I have 6 years of experience in local sales and I\'ve consistently met and exceeded my quota throughout my career. Within the last year, I\'ve topped our leaderboard six out of 10 months. On average, I close business 10% faster than my peers.');

  getBio() {
    return this.bio;
  }
}
