import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repos } from '../models/repos.model';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  private readonly URL: string;

  constructor(private _httpClient: HttpClient) {
    this.URL = "https://api.github.com/users/JairLopesJunior/repos";
  }

  getCityRegistered(page?: number): Observable<Repos[]> {
    if (!page) {
      page = 1;
    }
    return this._httpClient.get<Repos[]>(`${this.URL}?page=${page}&per_page=20`);
  }
}
