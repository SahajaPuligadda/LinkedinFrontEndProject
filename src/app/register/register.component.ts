import {Component, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {User} from "../user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {UserValidationService} from "../user-validation.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() uid: number;

  registerForm: FormGroup;
  error: boolean;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  user: User;
  message: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userValidationService: UserValidationService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onLogin(){
    this.registerForm.reset();
    this.router.navigate(["../login"], {relativeTo: this.route});
  }

  onSubmit() {
    this.name = this.registerForm.value['name'];
    this.email = this.registerForm.value['email'];
    this.password = this.registerForm.value['password'];
    this.userValidationService.registerUser(this.email, this.password, this.name)
      .subscribe(data => {
          this.error = true;
          this.message = "User is registered successfully! Login to your account!";
        },
        error => {
          this.error = true;
          this.message = "Account already exists! Try to login to your account!";
        });
    this.registerForm.reset();
  }

  private initForm() {
    let email = '';
    let password = '';
    let name = '';
    let confirmPass = '';

    this.registerForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'email': new FormControl(email, [Validators.required, Validators.email]),
      'password': new FormControl(password, [Validators.required, Validators.minLength(8)]),
      'confirmPassword': new FormControl(confirmPass, [Validators.required])
    },
      { validators:
          this.userValidationService.matchPassword('password',
            'confirmPassword') }
    );
  }
}
