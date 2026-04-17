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
  constructor(
  private loginService: LoginServiceService,
  private router: Router,
  private fb : FormBuilder
) {}

  loginForm = this.fb.group({
    email: ['',Validators.required],
    password: ['',Validators.required]
  });

  onSubmit(){
    console.log(this.loginForm.value);
    this.loginForm.reset();
    this.router.navigate(['/user-dashboard']);
  }
  loginData : User | null = null;

  ngOnInit(): void {
  this.loginService.getlogin().subscribe((response)=>{
    console.log(response);
    this.loginData = response;
  }
  );}
}
