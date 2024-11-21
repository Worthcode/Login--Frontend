import { Component, OnInit } from '@angular/core';
import { Empleado } from '../model/empleado';
import { EmpleadoService } from '../service/empleado/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  empleados: Empleado[] = [];
  newEmpleado: Empleado = new Empleado(0, '', '', '', '', new Date());

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
    console.log(this.newEmpleado);
    this.empleadoService.guardarEmpleado(this.newEmpleado).subscribe(data => {
      this.cargarEmpleados();
      this.newEmpleado = new Empleado(0, '', '', '', '', new Date());
    });
  }

  eliminarEmpleado(documento: number): void {
    this.empleadoService.eliminarEmpleado(documento).subscribe(() => {
      this.cargarEmpleados();
    });
  }
}