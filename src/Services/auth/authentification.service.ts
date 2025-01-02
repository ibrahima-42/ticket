import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../app/interfaces/login-response.interface';

const BASIC_URL = 'http://localhost:8080/api/v1/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    private http: HttpClient
  ) { }


  Login(email: String , password: String): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${BASIC_URL}/login`, { email, password });
  }

  Register(nomComplete: String , email: String , password: String ,telephone: String): Observable<any> {
      return this.http.post(`${BASIC_URL}/register`, { nomComplete, telephone, email, password });
  }

}
