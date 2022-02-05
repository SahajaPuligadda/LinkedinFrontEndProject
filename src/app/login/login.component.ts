import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    if (this.loginForm.value['email'] == "sahaja.123@gmail.com" &&
      this.loginForm.value['password'] == "sahaja") {
      this.router.navigate(['../about'], {relativeTo: this.route});
      this.error = false;
    } else {
      this.error = true;
      this.loginForm.reset();
      this.router.navigate(['../login'], {relativeTo: this.route});
    }
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
