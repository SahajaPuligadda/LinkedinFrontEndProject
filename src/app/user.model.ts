
export class User {
  private id: number;
  private email: string;
  private password: string;


  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
