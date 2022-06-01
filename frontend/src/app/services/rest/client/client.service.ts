import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Client } from '../models/client';

const baseUrl = 'http://localhost:3333/clients';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(baseUrl);
  }

  getClient(filter: string): Observable<Client> {
    return this.http.get<Client>(baseUrl + '/search/' + filter)
  }

  createClient(platform: 'web'|'store', client: Client):Observable<Client> {
    return this.http.post<Client>(baseUrl + `/create?platform=${platform}`, JSON.stringify(client), httpOptions)
  }

  updateClient(id:string, client: Client):Observable<Client> {
    return this.http.put<Client>(baseUrl + '/update/' + id, JSON.stringify(client.client), httpOptions)
  }

  deleteClient(id:string):Observable<Client> {
    return this.http.delete<Client>(baseUrl + '/delete/' + id)
  }

  fidelizeClient(id:string):Observable<Client> {
    return this.http.post<Client>(baseUrl + '/create/loyalty_program/' + id, httpOptions)
  }
}
