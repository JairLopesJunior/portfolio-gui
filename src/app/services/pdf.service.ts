import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PDFService {

  private readonly URL: string;

  constructor(private _httpClient: HttpClient) {
    this.URL = "http://localhost:8080/pdf";
  }

  generateFile(): Observable<Blob> {
    const headers = new HttpHeaders().set('Accept', 'application/pdf');

    return this._httpClient.get(this.URL, { headers, responseType: 'blob' });
  }
}
