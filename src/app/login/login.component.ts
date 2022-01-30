import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public isLoading: boolean = false;

  constructor(private fb: FormBuilder, private service: LoginService, private router: Router) { 
    this.loginForm = this.createForm();
  }

  ngOnInit(): void {
  }

  public doLogin() {
    this.isLoading = true;
    this.service.doLogin(this.loginForm.value).subscribe(
      (res: any) => {
        this.isLoading = false;
        localStorage.setItem('user-token', res['loginToken']);
        this.router.navigate(['./landing']);
      },
      () => {
        this.isLoading = false;
      }
    )
  }

  private createForm() {
    return this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
