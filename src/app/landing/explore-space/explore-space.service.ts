import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExploreSpaceService {

  constructor(private http: HttpClient) { }

  public getSpaceList(pageNo: number, pageSize: number) {
    const url = `https://localhost:44318/spaces/page/${pageNo}/${pageSize}`;
    return this.http.get(url);
  }
}
