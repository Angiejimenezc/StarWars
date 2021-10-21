import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../models/people';
import { Starship } from '../models/starship';

@Injectable({
  providedIn: 'root',
})
export class StarShipService {
  url: string = 'https://swapi.dev';
  endPoint: string = '/api/starships';

  constructor(private http: HttpClient) {}

  getStarShip(): Observable<Result[]> {
    return this.http.get<Result[]>(`${this.url}${this.endPoint}`);
  }
  getStarshipsId(id: number): Observable<Result[]> {
    return this.http.get<Result[]>(`${this.url}${this.endPoint}/${id}`);
  }
}
