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

  getCityRegistered(): Observable<Repos[]> {
    return this._httpClient.get<Repos[]>(this.URL);
  }
}
