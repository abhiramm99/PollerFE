import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilogin } from '../libraries/interfaces/core/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public doLogin(loginModel: Ilogin) {
    const url = "https://localhost:44318/login";
    return this.http.post(url, loginModel);
  }
}
