import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './signup.service';
import { ISignUp } from '../libraries/interfaces/core/signup.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;

  constructor(private fb: FormBuilder, private service: SignupService) {
    this.signupForm = this.createForm();
  }

  ngOnInit(): void {
    
  }

  public submitForm() {
    if (!this.validatePasswordMatch()) {
      alert("Password didn't match");
    } else {
      this.service.signUp(this.signupForm.value).subscribe(
        (res) => console.log(res),
        (err) => alert(err.error));
    }
  }

  private createForm() {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  private validatePasswordMatch(): boolean {
    return this.signupForm.value['password'] === this.signupForm.value['confirmPassword'];
  }

  

}
