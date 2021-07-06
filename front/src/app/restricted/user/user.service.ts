import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(offset:any, limit:any): Observable<User[]> {
    let headers = this.createContentHeader()
    // let url: string = '?limit=' + limit + '&offset=' + offset;

    return this.http.get(environment.apiUrl + '/user', { headers: headers })
    .pipe(map((response: any) => response));
  }

  getUser(id: string): Observable<User> {
    let headers = this.createContentHeader();
    return this.http.get(environment.apiUrl + '/user/' + id, { headers: headers })
    .pipe(map((response: any) => response));
  }

  saveUser(user: any): Observable<void> {
    let id = user.id;
    delete user.id;
    let headers = this.createContentHeader()
    
    if (id) {
        return this.http.put(environment.apiUrl + '/user/' + id, user, { headers: headers })
        .pipe(map((response: any) => response));
    } else {
        return this.http.post(environment.apiUrl + '/user', user, { headers: headers })
        .pipe(map((response: any) => response));
    }
  }

  delete(id: string): Observable<User[]> {
    let headers = this.createContentHeader();
    return this.http.delete(environment.apiUrl + '/user/' + id, { headers: headers })
    .pipe(map((response: any) => response));
  }

  createAuthorizationHeader():HttpHeaders {
    return new HttpHeaders().set('Accept', '*/**')
  }

  createContentHeader():HttpHeaders {
    return new HttpHeaders().set('Accept', '*/**')
  }

}