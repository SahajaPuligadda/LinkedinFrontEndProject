import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserValidationService} from "../user-validation.service";
import {User} from "../user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() uid: number;

  isLoginMode = true;
  loginForm: FormGroup;
  error: boolean;
  name: string;
  email: string;
  password: string;
  user: User;
  message: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userValidationService: UserValidationService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
    this.error = false;
    this.loginForm.reset();
  }

  onSubmit() {
    console.log(this.loginForm.value);
    if(this.isLoginMode) {
      this.user = new User(this.loginForm.value['email'],
        this.loginForm.value['password']);
      this.userValidationService.validateUser(this.user)
        .subscribe(data => {
          console.log("Logged in properly!");
          console.log(data);
          console.log(data.id);
          this.uid = data.id;
          this.error = true;
          this.message = "Logged in Successfully!";
          this.router.navigate(['../' + data.id + '/home'],
            {relativeTo: this.route});
        },
          error => {
          this.error = true;
          console.log("Access Denied!");
          console.log(error);
          this.message = "Invalid Credentials";
          });
    }
    else{
      this.email = this.loginForm.value['email'];
      this.password = this.loginForm.value['password'];
      this.user = new User(this.loginForm.value['email'],
        this.loginForm.value['password']);
      this.userValidationService.registerUser(this.user)
        .subscribe(data => {
            this.error = true;
            console.log("User is registered");
            this.message = "User is registered successfully! Login to your account!";
          },
          error => {
            this.error = true;
            console.log("Could not register. Account already exists!");
            this.message = "Account already exists! Try to login to your account!";
          });
    }
    this.loginForm.reset();
  }

  private initForm() {
    let email = '';
    let password = '';

    this.loginForm = new FormGroup({
      'email': new FormControl(email, [Validators.required, Validators.email]),
      'password': new FormControl(password, Validators.required)
    });
  }

}
