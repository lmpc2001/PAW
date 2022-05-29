import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book';

const baseUrl = 'http://localhost:3333/books';
const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Authorization': 'Bearer ' + localStorage?.getItem('token')
  })
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  
  getAllBooks(): Observable<any> {
    return this.http.get(baseUrl, httpOptions);
  }

  getBook(filter: string): Observable<Book> {
    return this.http.get<Book>(baseUrl + '/search/' + filter)
  }

  createBook(book: Book):Observable<Book> {
    const formData = new FormData();

    formData.append('title', book.book.title);
    formData.append('author', book.book.author);
    formData.append('isbn', book.book.isbn);
    formData.append('price', book.book.price.toString());
    formData.append('units_stock', book.book.units_stock.toString());
    formData.append('coverImage', book.book.coverImage);
    formData.append('state', book.book.state);

    return this.http.post<Book>(baseUrl + '/create', formData, httpOptions)
  }

  updateBook(id:string, book: Book):Observable<Book> {
    return this.http.put<Book>(baseUrl + '/update/' + id, JSON.stringify(book), httpOptions)
  }

  deleteBook(id:string):Observable<Book> {
    return this.http.delete<Book>(baseUrl + '/delete/' + id)
  }
}
