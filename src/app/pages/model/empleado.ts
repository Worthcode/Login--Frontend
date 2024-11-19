export class Empleado {
  documento: string;
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  fechaContratacion: Date;

  // Constructor que coincide con los parámetros
  constructor(
    documento: string,
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
