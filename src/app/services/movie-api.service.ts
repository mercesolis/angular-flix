import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieAPIService {

  private readonly URL = 'https://api.themoviedb.org/3/';
  private readonly API_KEY = 'f2187dacfb405791e3765f885a8a5ed2';
  constructor(private httpClient: HttpClient) { }

  get(path: string): Promise<any> {
    const params: HttpParams = new HttpParams()
      .append('api_key', this.API_KEY);
    return this.httpClient.get<any[]>(`${this.URL}${path}`, {params}).toPromise();
  }
}
