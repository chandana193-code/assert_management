import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService, User } from '../services/login-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showSuccess: boolean = false;
  showError: boolean = false;
  constructor(
    private loginService: LoginServiceService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', [Validators.required]]
  });

  onSubmit() {
    console.log(this.loginForm.value);
    const enteredEmail = this.loginForm.value.email;
    const enteredPassword = this.loginForm.value.password;
    const user = this.loginData.find(
      (u) => u.email === enteredEmail && u.password === enteredPassword
    );
    if (user) {
      this.showSuccess = true;
      setTimeout(() => {
        this.showSuccess = false;
        this.router.navigate(['/UserLayout']);
      }, 1500);


    } else {
      this.showError = true;

      setTimeout(() => {
        this.showError = false;
      }, 1500);
      // alert('Invalid Email or Password ❌');
    }

    this.loginForm.reset();
    //this.router.navigate(['/user-dashboard']);
  }
  loginData: User[] = [];

  ngOnInit(): void {
    this.loginService.getlogin().subscribe((response) => {
      console.log(response);
      this.loginData = response;
    }
    );
  }
}
