import { Injectable } from '@angular/core';
import { ISignUp } from '../libraries/interfaces/core/signup.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  public signUp(payLoad: ISignUp) {
    const url = 'https://localhost:44318/signup';
    return this.http.post(url, payLoad);
  }
}
