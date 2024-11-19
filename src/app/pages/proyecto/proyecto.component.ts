// src/app/components/proyecto/proyecto.component.ts
import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../service/proyecto/proyecto-service.service';
import { Proyecto } from '../model/proyecto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectos: Proyecto[] = [];
  proyecto: Proyecto = {
    id_proyecto: 0,
    nombreClave: '',
    denominacionComercial: '',
    fechaInicio: '',
    fechaFinalizacion: '',
    estadoActual: '',
    porcentajeAvance: ''
  };

  constructor(private proyectoService: ProyectoService, private router: Router) {}

  ngOnInit(): void {
    this.loadProyectos();
  }

  loadProyectos(): void {
    this.proyectoService.getProyectos().subscribe((data) => {
      this.proyectos = data;
    });
  }

  deleteProyecto(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este proyecto?')) {
      this.proyectoService.deleteProyecto(id).subscribe(() => {
        this.loadProyectos(); // Recargar la lista de proyectos
      });
    }
  }

  createProyecto(): void {
    this.proyectoService.createProyecto(this.proyecto).subscribe(() => {
      this.loadProyectos();
      this.proyecto = { id_proyecto: 0, nombreClave: '', denominacionComercial: '', fechaInicio: '', fechaFinalizacion: '', estadoActual: '', porcentajeAvance: '' };
    });
  }

  editProyecto(id: number): void {
    this.proyectoService.getProyectoById(id).subscribe((data) => {
      this.proyecto = data;
    });
  }

  updateProyecto(): void {
    if (this.proyecto.id_proyecto) {
      this.proyectoService.updateProyecto(this.proyecto.id_proyecto, this.proyecto).subscribe(() => {
        this.loadProyectos();
      });
    }
  }
}
