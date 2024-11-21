export class Empleado {
  documento: number;
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  fechaContratacion: Date;

  constructor(
    documento: number,
    nombre: string,
    apellido: string,
    telefono: string,
    correo: string,
    fechaContratacion: Date
  ) {
    this.documento = documento;
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.correo = correo;
    this.fechaContratacion = fechaContratacion;
  }
}
