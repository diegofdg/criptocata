import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriptomonedaComponent } from './pages/criptomoneda/criptomoneda.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { IntegranteComponent } from './pages/integrante/integrante.component';
import { OperacionesComponent } from './pages/operaciones/operaciones.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { TransaccionesComponent } from './pages/transacciones/transacciones.component';

const routes: Routes = [
  
  {path:'inicio', component: InicioComponent,
    children:[
      {path:'operaciones', component: OperacionesComponent},
      {path:'transacciones', component: TransaccionesComponent},
      {path:'criptomoneda', component: CriptomonedaComponent},
  ]},
  {path: 'servicios', component:ServiciosComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
  {path: 'quienes-somos/:id', component: IntegranteComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
