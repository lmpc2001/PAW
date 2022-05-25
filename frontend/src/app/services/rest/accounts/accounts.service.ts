import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Account } from '../models/account';

const baseUrl = 'http://localhost:3333/accounts/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAllAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(baseUrl);
  }

  getAccount(filter: string): Observable<Account> {
    return this.http.get<Account>(baseUrl + '/search/' + filter)
  }

  createAccount(account: Account):Observable<Account> {
    return this.http.post<Account>(baseUrl + '/create', JSON.stringify(account), httpOptions)
  }

  updateAccount(id:string, account: Account):Observable<Account> {
    return this.http.put<Account>(baseUrl + '/update/' + id, JSON.stringify(account), httpOptions)
  }

  deleteAccount(id:string):Observable<Account> {
    return this.http.delete<Account>(baseUrl + '/delete/' + id)
  }
}
