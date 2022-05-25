import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Purchase } from '../models/purchase';

const baseUrl = 'http://localhost:3333/purchases/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http: HttpClient) { }

  getAllPurchases(): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(baseUrl);
  }

  getPurchase(filter: string): Observable<Purchase> {
    return this.http.get<Purchase>(baseUrl + '/search/' + filter)
  }

  createPurchase(purchase: Purchase):Observable<Purchase> {
    return this.http.post<Purchase>(baseUrl + '/create', JSON.stringify(purchase), httpOptions)
  }

  updatePurchase(id:string, purchase: Purchase):Observable<Purchase> {
    return this.http.put<Purchase>(baseUrl + '/update/' + id, JSON.stringify(purchase), httpOptions)
  }

  deletePurchase(id:string):Observable<Purchase> {
    return this.http.delete<Purchase>(baseUrl + '/delete/' + id)
  }
}
