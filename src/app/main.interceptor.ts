import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {AuthService} from "./services";
import {Router} from "@angular/router";

//interceptor треба підключити до модулю, у даному випадку до app.module в providers

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService, private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isAuthenticated = this.authService.isAuthorization(); // перевіряє чи є у стореджі токен

    if(isAuthenticated){                                             //якщо є токен (залогінений) то:
      request = this.addToken(request, this.authService.getToken())  //request замінюємо на request+token
    }

    return next.handle(request).pipe(   // продовжує запит (відсилає на бекенд)
      // @ts-ignore
      catchError((res:HttpErrorResponse) => {
        if (res && res.error && res.status === 401){
          this.authService.deleteToken();
          this.router.navigate(['login'])
        }
      })
    )
  }

  addToken(request:HttpRequest<any>, token:string):HttpRequest<any>{  //додаємо до request`a token
    return request.clone({
      setHeaders:{Authorization: `Bearer ${token}`}
    })
  }
}
