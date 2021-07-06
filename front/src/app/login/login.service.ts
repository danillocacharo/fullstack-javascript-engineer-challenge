import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
   }

  private extractData(res: Response) {
    let body = (<any>res).records;
    return body || { };
  }

  private handleError (error: Response | any) {
    return Observable.throw(error);
  }

  createAuthorizationHeader():HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    // .set('Authorization', LocalUtils.decrypt(localStorage.getItem("token")));
  }

  createContentHeader():HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  }

}