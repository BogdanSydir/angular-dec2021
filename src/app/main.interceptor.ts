import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  private token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGVhYTk3YjQ3YjY5ZjAzOTg0YjYxZDk4YTc0NDI1NSIsInN1YiI6IjYyOTNhNTczNWE0NjkwMDA1MmJlMGI4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ng07w48AXJ5fCBlQkU6UUVsD5M148b_BEzG3El-BNU'

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = request.clone({
      setHeaders:{Authorization: `Bearer ${this.token}`}
    })

    return next.handle(request);
  }

}
