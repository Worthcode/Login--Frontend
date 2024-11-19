import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../../model/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private apiUrl = 'http://localhost:8080/empleados';

  constructor(private http: HttpClient) { }

  obtenerEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.apiUrl);
  }

  obtenerEmpleadoPorDocumento(documento: string): Observable<Empleado> {
    return this.http.get<Empleado>(`${this.apiUrl}/${documento}`);
  }

  guardarEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.apiUrl, empleado);
  }

  eliminarEmpleado(documento: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${documento}`);
  }
}
