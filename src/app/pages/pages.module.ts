import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RegistroComponent } from './registro/registro.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { InicioComponent } from './inicio/inicio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IntegranteComponent } from './integrante/integrante.component';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { CriptomonedaComponent } from './criptomoneda/criptomoneda.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    IniciarSesionComponent,
    QuienesSomosComponent,
    RegistroComponent,
    ServiciosComponent,
    InicioComponent,
    PageNotFoundComponent,
    IntegranteComponent,
    OperacionesComponent,
    TransaccionesComponent,
    CriptomonedaComponent,    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [
    ServiciosComponent
  ]
})
export class PagesModule { }
