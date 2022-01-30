import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISpacePayLoad } from './new-space-form.interface';

@Injectable({
  providedIn: 'root'
})
export class NewSpaceFormService {

  constructor(private http: HttpClient) { }

  public addNewSpace(payLoad: ISpacePayLoad) {
    const url = 'https://localhost:44318/spaces';
    return this.http.post(url, payLoad);
  }
}
