import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RegistroComponent } from './registro/registro.component';
import { ServiciosComponent } from './servicios/servicios.component';



@NgModule({
  declarations: [
    IniciarSesionComponent,
    QuienesSomosComponent,
    RegistroComponent,
    ServiciosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ServiciosComponent
  ]
})
export class PagesModule { }
