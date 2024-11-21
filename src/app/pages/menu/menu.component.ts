import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importa el Router

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private router: Router) {}

  goToEmpleado() {
    this.router.navigate(['/empleado']);
  }

  goToProyecto() {
    this.router.navigate(['/proyecto']);
  }
}
