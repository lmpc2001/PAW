import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book';

const baseUrl = 'http://localhost:3333/books/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(baseUrl);
  }

  getBook(filter: string): Observable<Book> {
    return this.http.get<Book>(baseUrl + '/search/' + filter)
  }

  createBook(book: Book):Observable<Book> {
    return this.http.post<Book>(baseUrl + '/create', JSON.stringify(book), httpOptions)
  }

  updateBook(id:string, book: Book):Observable<Book> {
    return this.http.put<Book>(baseUrl + '/update/' + id, JSON.stringify(book), httpOptions)
  }

  deleteBook(id:string):Observable<Book> {
    return this.http.delete<Book>(baseUrl + '/delete/' + id)
  }
}
