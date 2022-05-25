import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Roule } from '../models/roule';

const baseUrl = 'http://localhost:3333/rouless/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RoulesService {

  constructor(private http: HttpClient) { }

  getAllRoules(): Observable<Roule[]> {
    return this.http.get<Roule[]>(baseUrl);
  }

  getRoule(filter: string): Observable<Roule> {
    return this.http.get<Roule>(baseUrl + '/search/' + filter)
  }

  createRoule(roules: Roule):Observable<Roule> {
    return this.http.post<Roule>(baseUrl + '/create', JSON.stringify(roules), httpOptions)
  }

  updateRoule(id:string, roules: Roule):Observable<Roule> {
    return this.http.put<Roule>(baseUrl + '/update/' + id, JSON.stringify(roules), httpOptions)
  }

  deleteRoule(id:string):Observable<Roule> {
    return this.http.delete<Roule>(baseUrl + '/delete/' + id)
  }
}
