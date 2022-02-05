// import { Component, OnInit } from '@angular/core';
// import {FormControl, FormGroup, Validators} from "@angular/forms";
// import {ActivatedRoute, Router} from "@angular/router";
//
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//   registerForm: FormGroup;
//   name: String;
//   email: String;
//   password: String;
//
//   constructor(private router: Router,
//               private route: ActivatedRoute) { }
//
//   ngOnInit(): void {
//     this.initForm();
//   }
//
//   onSubmit() {
//     this.name = this.registerForm.value['name'];
//     this.email = this.registerForm.value['email'];
//     this.password = this.registerForm.value['password'];
//     this.router.navigate(['../skills'], {relativeTo: this.route});
//   }
//
//   private initForm() {
//     let fname= '';
//     let email = '';
//     let password = '';
//
//     this.registerForm = new FormGroup({
//       'name': new FormControl(password, Validators.required),
//       'email': new FormControl(email, [Validators.required, Validators.email]),
//       'password': new FormControl(password, Validators.required)
//     });
//   }
//
// }
