import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IgetData } from 'src/types/input';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  // metodo getData que recebe dados da API

  getData({input, count}:IgetData): Observable<any> {

    const url = `https://api.github.com/search/repositories?q=${input}&page=${count}&per_page=10`;

    return this.http.get<any>(url);
  }
}
