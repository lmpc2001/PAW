import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const currentUser = JSON.parse(localStorage.getItem('token')!);
      
      if(currentUser) {
        req= req.clone({
          setHeaders:{
            AuthorizationService: `Bearer ${currentUser}`
          }
        });
      }
    return next.handle(req);
  }
}
