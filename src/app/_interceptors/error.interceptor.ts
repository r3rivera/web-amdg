import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '@/_service/auth';
import { AppAlert } from '@/_models';

/**
 * Intercepts any response from the backend application. We can perform transformation
 * here into an AppAlert object
 */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private _authService: AuthenticationService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<AppAlert>> {

        console.debug("ErrorInterceptor...");
        return next.handle(req).pipe(catchError(err => {
            const alert = new AppAlert(); 
            if (err.status === 401) {

                this._authService.logout();
                alert.type = "error";
                //location.reload(true);
            }
        
            alert.code = err.error.code || "GEN5000";
            alert.message = err.error.message || "Unhandled Error Response";
            return throwError(alert);
        }))
    }

}
