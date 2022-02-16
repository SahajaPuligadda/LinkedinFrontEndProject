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

  // isLoginMode = true;
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

  onRegister(){
    this.loginForm.reset();
    this.router.navigate(["../register"], {relativeTo: this.route});
  }

  onSubmit() {
    this.user = new User(this.loginForm.value['email'],
      this.loginForm.value['password']);
    this.userValidationService.validateUser(this.user)
      .subscribe(data => {
        this.uid = data.id;
        this.error = true;
        this.message = "Logged in Successfully!";
        this.router.navigate(['../' + data.id + '/home'],
          {relativeTo: this.route});
      },
        error => {
        this.error = true;
        console.log(error);
        this.message = "Invalid Credentials";
        });
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
