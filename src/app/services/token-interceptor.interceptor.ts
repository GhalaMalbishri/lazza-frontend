import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor() { }
  //
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = localStorage.getItem('token'); // تخزين
    if (accessToken != null) {
      request = request.clone({  // اذا يطابق الوك ستورج
        setHeaders: {
          'authorization': `Bearer ${localStorage.getItem('token')}`, // المتطلبات من الباك اند 
          'Accept': 'application/json'
        }
      });
    }
    return next.handle(request);
  }
}

