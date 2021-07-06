import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserType } from './user-type.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserTypeService {

  constructor(private http: HttpClient) {}

  getUserTypes(): Observable<UserType[]> {
    let headers = this.createContentHeader();

    return this.http.get(environment.apiUrl + '/user-type', { headers: headers })
    .pipe(map((response: any) => response));
  }

  getUserType(id: any): Observable<UserType> {
    let headers = this.createContentHeader();
    return this.http.get(environment.apiUrl + '/user-type/' + id, { headers: headers })
    .pipe(map((response: any) => response));
  }

  saveUserType(usertype: any): Observable<void> {
    let id = usertype.id;
    delete usertype.id;
    let headers = this.createContentHeader()
    
    if (id) {
        return this.http.put(environment.apiUrl + '/user-type/' + id, usertype, { headers: headers })
        .pipe(map((response: any) => response));
    } else {
        return this.http.post(environment.apiUrl + '/user-type', usertype, { headers: headers })
        .pipe(map((response: any) => response));
    }
  }

  delete(id: string): Observable<UserType[]> {
    let headers = this.createContentHeader();
    return this.http.delete(environment.apiUrl + '/user-type/' + id, { headers: headers })
    .pipe(map((response: any) => response));
  }

  createAuthorizationHeader():HttpHeaders {
    return new HttpHeaders().set('Accept', '*/**')
  }

  createContentHeader():HttpHeaders {
    return new HttpHeaders().set('Accept', '*/**')
  }

}