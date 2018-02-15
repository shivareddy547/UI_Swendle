import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User } from '../models/user';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class AuthService {
  private BASE_URL: string = 'http://localhost:3000/api_token';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {}

  login(user: User): Promise<any> {
    let url: string = `${this.BASE_URL}`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }
  register(user: User): Promise<any> {
    let url: string = `${this.BASE_URL}/registration/`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }

  ensureAuthenticated(token): Promise<any> {
  // let token: string = `Bearer ${token}`

  let url: string = `${this.BASE_URL}/login/`;
  let headers: Headers = new Headers({
    'Content-Type': 'application/json'
    // Authorization: `Bearer ${token}`
  });
  return this.http.get(url, {headers: headers}).toPromise();

}


}



