import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthModel } from '../../model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  private apiUrl = 'http://localhost:8080/api/users'; // Cambia a la URL de tu backend

  constructor(private http: HttpClient) { }

  login(authData: AuthModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/validar`, authData);
  }

  register(authData: AuthModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, authData);
  }
}
