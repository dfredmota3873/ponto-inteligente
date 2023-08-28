import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { enviroment as env } from '../../../../environments/enviroment';
import { Login } from '../'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly PATH: string = 'auth';

  constructor(private http: HttpClient) { }

  logar(login: Login): Observable<any> {
    console.log(env.baseUrl + this.PATH);
      return this.http.post(env.baseUrl + this.PATH, login);
  }
}
