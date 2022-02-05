import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {UserValidationService} from "../user-validation.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginMode = true;
  loginForm: FormGroup;
  error: boolean;
  name: String;
  email: String;
  password: String;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userValidationService: UserValidationService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    console.log(this.loginForm.value);
    if(this.isLoginMode) {
      // if (this.loginForm.value['email'] == "sahaja.123@gmail.com" &&
      //   this.loginForm.value['password'] == "sahaja") {
      //   this.router.navigate(['../about'], {relativeTo: this.route});
      //   this.error = false;
      // } else {
      //   this.error = true;
      //   this.loginForm.reset();
      //   this.router.navigate(['../login'], {relativeTo: this.route});
      // }
      this.userValidationService.validateUser(this.loginForm.value['email'],
        this.loginForm.value['password']);
    }
    else{
      this.email = this.loginForm.value['email'];
      this.password = this.loginForm.value['password'];
      this.router.navigate(['../skills'], {relativeTo: this.route});
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
