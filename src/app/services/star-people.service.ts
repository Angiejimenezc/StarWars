import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../models/people';

@Injectable({
  providedIn: 'root',
})
export class StarPeopleService {
  url: string = 'https://swapi.dev';
  endPoint: string = '/api/people';

  constructor(private http: HttpClient) {}
  getStarPeople(): Observable<Result[]> {
    return this.http.get<Result[]>(this.url + this.endPoint);
  }
}
