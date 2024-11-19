import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../model/empleado';
import { EmpleadoService } from '../../service/empleado/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  empleados: Empleado[] = [];
  newEmpleado: Empleado = new Empleado('', '', '', '', '', new Date());

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  cargarEmpleados(): void {
    this.empleadoService.obtenerEmpleados().subscribe(data => {
      this.empleados = data;
    });
  }

  guardarEmpleado(): void {
    this.empleadoService.guardarEmpleado(this.newEmpleado).subscribe(data => {
      this.cargarEmpleados();
      this.newEmpleado = new Empleado('', '', '', '', '', new Date()); // Limpiar formulario
    });
  }

  eliminarEmpleado(documento: string): void {
    this.empleadoService.eliminarEmpleado(documento).subscribe(() => {
      this.cargarEmpleados();
    });
  }
}
