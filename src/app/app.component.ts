import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // Importa ReactiveFormsModule si es necesario
import { RouterOutlet } from '@angular/router'; // Importa RouterOutlet si es necesario
import { UsuarioService } from './service/usuario.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [ReactiveFormsModule, HttpClientModule, RouterOutlet], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loginForm: FormGroup;
  submitted = false;
  message: string | undefined;

  constructor(private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: [' ', Validators.required]
    });
  }
  ngOnInit(): void {
  }

  // Getter para acceder a los controles del formulario
  get formControls() {
    return this.loginForm.controls;
  }


  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const { username, password } = this.loginForm.value;
    if (username === 'admin' && password === 'admin') {
      this.message = 'Inicio de sesión exitoso';
    } else {
      this.message = 'Usuario o contraseña incorrectos';
    }
  }
}
