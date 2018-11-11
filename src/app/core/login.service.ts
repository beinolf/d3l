import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Account, Transaction} from './admin-data.service';


export interface Login {
admin: number;
valid: string;
userid: number;
}

@Injectable()
export class LoginService {

constructor(private httpClient: HttpClient) {
  }

  tryLogin(uname, password): Observable<Login> {
    return this.httpClient.get<Login>('http://127.0.0.1:80/login/' + uname + '/' + password).pipe();
  }
}
