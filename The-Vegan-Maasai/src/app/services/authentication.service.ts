import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs-compat/Observable';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username, 
      password}, httpOptions);
  }

  register(firstname: string, lastname: string, email: string, username: string, password: string):Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      firstname, 
      lastname,
      username, 
      email, 
      password
    }, httpOptions);
  }
}
