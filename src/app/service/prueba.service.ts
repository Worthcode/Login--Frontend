import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PruebaConexionService {
  private baseUrl = environment.baseUrl + '/ruta-de-prueba';

  constructor(private httpClient: HttpClient) {}

  probarConexion(): Observable<any> {
    return this.httpClient.get(this.baseUrl); // Asegúrate de que el método sea correcto
  }
}
