import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';

// You can inject services into interceptors.
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);
    // const copiedReq = req.clone({headers: req.headers.append('', '')}); // Make copy of incoming request, if we want to work on it, for safety reasons - be sure that the incoming request won't be modified, eventually crashed. We can only read request, because of immutability, the clone request is configured actually differently, and we can make changes that way.
    const copiedReq = req.clone({params: req.params.set('auth', this.authService.getToken())});
    return next.handle(copiedReq); // Let the request continue its journey.
  }
}
