import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './pages/log-in/log-in.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { EmpleadoComponent } from './pages/empleado/empleado/empleado.component';

const routes: Routes = [
  {
    path:'log-in', component: LogInComponent
  },
  {
    path:'proyecto', component: ProyectoComponent
  },
  {
    path:'empleado', component: EmpleadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }