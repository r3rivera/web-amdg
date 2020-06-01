import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '@/_service/auth/authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private _authService: AuthenticationService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.debug("TokenInterceptor...");
        // add authorization header with jwt token if available
        let currentUser = this._authService.currentUserValue;

        if (currentUser && currentUser.token) {
            req = req.clone({
                setHeaders: { 
                    "x-rcapp-token": `${currentUser.token}`
                }
            });
        }

        return next.handle(req);
    }
}
