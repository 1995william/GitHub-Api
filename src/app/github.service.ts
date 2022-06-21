import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}




  getData(input:string | undefined): Observable<any> {
    const url = `https://api.github.com/search/repositories?q=${input}`;

    return this.http.get<any>(url);
  }
}
