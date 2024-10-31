import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, FormsModule] // Importa CommonModule y FormsModule aquí
})
export class AppComponent {

  constructor(){
    
  }
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  onSubmit() {
    if (this.username === '' || this.password === '') {
      this.errorMessage = 'Por favor, completa todos los campos.';
    } else {
      this.errorMessage = ''; 
      console.log('Inicio de sesión exitoso:', this.username);
    }
  }
}
