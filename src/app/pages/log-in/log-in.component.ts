// log-in.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthModel } from '../model/usuario';
import { LogInService } from '../service/log-in/log-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginData: AuthModel = { id:0, username: '', password: '' };
  registerData: AuthModel = { id: 0, username: '', password: '' };
  isLogin: boolean = true; // Para saber si estamos en login o en registro
  errorMessage: string = '';
newEmpleado: any;

  constructor(private authService: LogInService,
    private router: Router
  ) { }

  ngOnInit() {}

  onLogin() {
    if(this.loginData.username === 'admindeprueba' && this.loginData.password === '123'){
      console.log('correcto');
      this.errorMessage = 'correctas';
      this.router.navigate(['/menu']);
    }else{
      console.error('Login error:');
      this.errorMessage = 'Credenciales incorrectas. Inténtalo de nuevo.';
    }
  }
  onRegister() {
    this.authService.register(this.registerData).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        this.isLogin = true;
      },
      error: (err) => {
        console.error('Registration error:', err);
        this.errorMessage = 'Hubo un error al crear la cuenta.';
      }
    });
  }

  toggleForm() {
    this.isLogin = !this.isLogin; // Cambia entre formulario de login y registro
    this.errorMessage = ''; // Limpia cualquier mensaje de error
  }
}
